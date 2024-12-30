import React, { useState } from 'react';
import { Search, Truck } from 'lucide-react';
import { useShipments } from '../../hooks/useShipments';
import ShipmentTimeline from './ShipmentTimeline';
import LoadingSpinner from '../layout/LoadingSpinner';

const ShipmentTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const { shipments, isLoading, error } = useShipments();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', trackingNumber);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#001E5D] mb-6">
        Rastrear Envíos
      </h2>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Número de seguimiento"
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2AD4AE] focus:border-transparent"
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-[#001E5D] text-white rounded-r-md hover:bg-[#002DA4] transition-colors duration-200"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <div className="text-red-500 bg-red-50 p-4 rounded-lg inline-flex items-center">
            <span className="text-sm">{error}</span>
          </div>
        </div>
      ) : shipments.length === 0 ? (
        <div className="text-center py-8">
          <Truck className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500">No se encontraron envíos activos</p>
        </div>
      ) : (
        <div className="space-y-6">
          {shipments.map((shipment) => (
            <ShipmentTimeline key={shipment.id} shipment={shipment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShipmentTracker;