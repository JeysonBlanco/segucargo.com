import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Shipment } from './types';

interface ShipmentTimelineProps {
  shipment: Shipment;
}

const ShipmentTimeline = ({ shipment }: ShipmentTimelineProps) => (
  <div className="relative flex items-center">
    <div className="flex items-center relative z-10">
      <div className={`
        flex items-center justify-center w-10 h-10 rounded-full
        ${shipment.status === 'Entregado' ? 'bg-[#2AD4AE]' : 'bg-[#001E5D]'}
        transition-colors duration-300
      `}>
        {shipment.status === 'Entregado' ? (
          <Check className="w-6 h-6 text-white" />
        ) : (
          <Clock className="w-6 h-6 text-white" />
        )}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-[#001E5D]">{shipment.trackingNumber}</h4>
        <p className="text-sm text-gray-600">{shipment.description}</p>
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
          getStatusStyles(shipment.status)
        }`}>
          {shipment.status}
        </span>
      </div>
    </div>
  </div>
);

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'En Tránsito':
      return 'bg-blue-100 text-blue-800';
    case 'Entregado':
      return 'bg-green-100 text-green-800';
    case 'En Proceso':
      return 'bg-yellow-100 text-yellow-800';
    case 'Retenido':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default ShipmentTimeline;