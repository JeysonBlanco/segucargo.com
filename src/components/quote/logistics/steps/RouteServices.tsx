import React from 'react';
import { MapPin, Ship, Plane, Truck } from 'lucide-react';
import { StepProps } from '../types';
import TransportModeSelector from '../components/TransportModeSelector';
import IncotermSelector from '../components/IncotermSelector';

const RouteServices = ({ formData, updateFormData, onNext, onBack }: StepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#2AD4AE]" />
              <span>Origen</span>
            </div>
          </label>
          <input
            type="text"
            value={formData.origin}
            onChange={(e) => updateFormData({ origin: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ciudad, País"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#2AD4AE]" />
              <span>Destino</span>
            </div>
          </label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) => updateFormData({ destination: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ciudad, País"
            required
          />
        </div>
      </div>

      <TransportModeSelector
        selectedModes={formData.services}
        onSelect={(modes) => updateFormData({ services: modes })}
      />

      <IncotermSelector
        value={formData.incoterm}
        onChange={(value) => updateFormData({ incoterm: value })}
      />

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
          className="px-6 py-2 bg-[#001E5D] text-white rounded-md hover:bg-[#002DA4] transition-colors"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default RouteServices;