import React from 'react';
import { Ship, Plane, Truck, Package } from 'lucide-react';

interface TransportModeDetailsProps {
  mode: string;
  onSelect: (subtype: string) => void;
}

const TransportModeDetails = ({ mode, onSelect }: TransportModeDetailsProps) => {
  const getModeOptions = () => {
    switch (mode) {
      case 'sea':
        return [
          { id: 'fcl', label: 'FCL - Contenedor Completo', icon: Ship },
          { id: 'lcl', label: 'LCL - Carga Consolidada', icon: Package },
        ];
      case 'air':
        return [
          { id: 'general', label: 'Carga General', icon: Plane },
          { id: 'courier', label: 'Courier Express', icon: Package },
        ];
      case 'land':
        return [
          { id: 'ftl-national', label: 'FTL Nacional - Camión Completo', icon: Truck },
          { id: 'ltl-national', label: 'LTL Nacional - Carga Parcial', icon: Package },
          { id: 'ftl-international', label: 'FTL Internacional', icon: Truck },
          { id: 'ltl-international', label: 'LTL Internacional', icon: Package },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-[#001E5D]">
        Selecciona el tipo de servicio
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {getModeOptions().map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#2AD4AE] hover:bg-[#2AD4AE]/5 transition-all group"
          >
            <div className="p-2 bg-[#001E5D] rounded-lg group-hover:bg-[#2AD4AE] transition-colors">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <span className="ml-4 text-gray-700 group-hover:text-[#001E5D] font-medium">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransportModeDetails;