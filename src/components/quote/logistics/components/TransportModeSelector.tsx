import React, { useState } from 'react';
import { Ship, Plane, Truck } from 'lucide-react';
import TransportModeDetails from './TransportModeDetails';

interface TransportModeSelectorProps {
  onSelect: (mode: string, subtype: string) => void;
}

const transportModes = [
  { id: 'sea', icon: Ship, label: 'Marítimo' },
  { id: 'air', icon: Plane, label: 'Aéreo' },
  { id: 'land', icon: Truck, label: 'Terrestre' },
];

const TransportModeSelector = ({ onSelect }: TransportModeSelectorProps) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleModeSelect = (modeId: string) => {
    setSelectedMode(modeId);
  };

  const handleSubtypeSelect = (subtype: string) => {
    if (selectedMode) {
      onSelect(selectedMode, subtype);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-[#001E5D] mb-4">
          Selecciona el modo de transporte
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {transportModes.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleModeSelect(id)}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedMode === id
                  ? 'border-[#2AD4AE] bg-[#2AD4AE]/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <Icon className={`h-8 w-8 ${
                  selectedMode === id ? 'text-[#2AD4AE]' : 'text-gray-400'
                }`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedMode && (
        <TransportModeDetails 
          mode={selectedMode} 
          onSelect={handleSubtypeSelect}
        />
      )}
    </div>
  );
};

export default TransportModeSelector;