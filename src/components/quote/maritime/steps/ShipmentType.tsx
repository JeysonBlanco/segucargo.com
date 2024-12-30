import React from 'react';
import { Container, Package } from 'lucide-react';
import { MaritimeQuoteData } from '../types';

interface ShipmentTypeProps {
  data: MaritimeQuoteData;
  onUpdate: (data: Partial<MaritimeQuoteData>) => void;
  onNext: () => void;
}

const ShipmentType = ({ data, onUpdate, onNext }: ShipmentTypeProps) => {
  const handleSelect = (type: string) => {
    onUpdate({ shipmentType: type });
    onNext();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#001E5D]">
        ¿Qué tipo de embarque necesitas?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handleSelect('FCL')}
          className={`p-6 rounded-lg border-2 transition-all hover:border-[#2AD4AE] hover:bg-[#2AD4AE]/5 ${
            data.shipmentType === 'FCL' ? 'border-[#2AD4AE] bg-[#2AD4AE]/10' : 'border-gray-200'
          }`}
        >
          <Container className="h-12 w-12 mx-auto mb-4 text-[#001E5D]" />
          <h3 className="text-lg font-semibold text-[#001E5D] mb-2">
            Contenedor Completo (FCL)
          </h3>
          <p className="text-sm text-gray-600">
            Para cargas que ocupan un contenedor completo
          </p>
        </button>

        <button
          onClick={() => handleSelect('LCL')}
          className={`p-6 rounded-lg border-2 transition-all hover:border-[#2AD4AE] hover:bg-[#2AD4AE]/5 ${
            data.shipmentType === 'LCL' ? 'border-[#2AD4AE] bg-[#2AD4AE]/10' : 'border-gray-200'
          }`}
        >
          <Package className="h-12 w-12 mx-auto mb-4 text-[#001E5D]" />
          <h3 className="text-lg font-semibold text-[#001E5D] mb-2">
            Carga Suelta (LCL)
          </h3>
          <p className="text-sm text-gray-600">
            Para cargas menores que comparten contenedor
          </p>
        </button>
      </div>
    </div>
  );
};

export default ShipmentType;