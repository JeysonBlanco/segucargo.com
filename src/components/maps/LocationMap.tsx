import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useLoadingState } from '../../hooks/useLoadingState';

interface LocationMapProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ position: google.maps.LatLngLiteral; title: string }>;
  className?: string;
}

const LocationMap = ({ center, zoom = 15, markers = [], className = '' }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { isLoading, error, setLoading, setError } = useLoadingState();

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    const initMap = async () => {
      setLoading(true);
      try {
        const { Map } = await loader.importLibrary('maps');
        
        if (!mapRef.current) return;
        
        const map = new Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#242f3e' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#17263c' }]
            }
          ]
        });

        markers.forEach(marker => {
          new google.maps.Marker({
            position: marker.position,
            map,
            title: marker.title,
          });
        });
      } catch (err) {
        setError('Error loading map');
        console.error('Error loading Google Maps:', err);
      } finally {
        setLoading(false);
      }
    };

    initMap();
  }, [center, zoom, markers]);

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