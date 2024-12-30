import React from 'react';
import { Package, MapPin, Ship, Ruler, Weight } from 'lucide-react';
import { StepProps } from '../types';
import QuoteSummaryCard from '../components/QuoteSummaryCard';

const QuoteSummary = ({ formData, onBack }: StepProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuoteSummaryCard
          title="Detalles de Carga"
          items={[
            {
              icon: Package,
              label: 'Tipo de Carga',
              value: formData.cargoType,
            },
            {
              icon: Weight,
              label: 'Peso',
              value: `${formData.weight} kg`,
            },
            {
              icon: Ruler,
              label: 'Dimensiones',
              value: `${formData.dimensions.length}x${formData.dimensions.width}x${formData.dimensions.height} cm`,
            },
          ]}
        />

        <QuoteSummaryCard
          title="Ruta y Servicios"
          items={[
            {
              icon: MapPin,
              label: 'Origen',
              value: formData.origin,
            },
            {
              icon: MapPin,
              label: 'Destino',
              value: formData.destination,
            },
            {
              icon: Ship,
              label: 'Incoterm',
              value: formData.incoterm,
            },
          ]}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#2AD4AE] text-[#001E5D] rounded-md hover:bg-[#001E5D] hover:text-white transition-colors"
        >
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
};

export default QuoteSummary;