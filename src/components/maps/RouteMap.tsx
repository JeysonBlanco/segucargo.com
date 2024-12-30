import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useLoadingState } from '../../hooks/useLoadingState';

interface RouteMapProps {
  origin: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;
  className?: string;
}

const RouteMap = ({ origin, destination, className = '' }: RouteMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { isLoading, error, setLoading, setError } = useLoadingState();

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['routes'],
    });

    const initMap = async () => {
      setLoading(true);
      try {
        const { Map } = await loader.importLibrary('maps');
        const { DirectionsService, DirectionsRenderer } = await loader.importLibrary('routes');
        
        if (!mapRef.current) return;
        
        const map = new Map(mapRef.current, {
          center: origin,
          zoom: 12,
        });

        const directionsService = new DirectionsService();
        const directionsRenderer = new DirectionsRenderer({
          map,
          suppressMarkers: false,
        });

        const request = {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            setError('Error calculating route');
          }
        });
      } catch (err) {
        setError('Error loading map');
        console.error('Error loading Google Maps:', err);
      } finally {
        setLoading(false);
      }
    };

    initMap();
  }, [origin, destination]);

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-600">Error loading map: {error}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2AD4AE]" />
        </div>
      )}
    </div>
  );
};