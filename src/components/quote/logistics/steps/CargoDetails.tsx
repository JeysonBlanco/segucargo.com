import React from 'react';
import { Package, Weight, Ruler } from 'lucide-react';
import { StepProps } from '../types';

const CargoDetails = ({ formData, updateFormData, onNext }: StepProps) => {
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
              <Package className="h-4 w-4 text-[#2AD4AE]" />
              <span>Tipo de Carga</span>
            </div>
          </label>
          <select
            value={formData.cargoType}
            onChange={(e) => updateFormData({ cargoType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="general">Carga General</option>
            <option value="container">Contenedor</option>
            <option value="dangerous">Mercancía Peligrosa</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <Weight className="h-4 w-4 text-[#2AD4AE]" />
              <span>Peso (kg)</span>
            </div>
          </label>
          <input
            type="number"
            value={formData.weight}
            onChange={(e) => updateFormData({ weight: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ej: 1000"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-2">
            <Ruler className="h-4 w-4 text-[#2AD4AE]" />
            <span>Dimensiones (cm)</span>
          </div>
        </label>
        <div className="mt-1 grid grid-cols-3 gap-4">
          <input
            type="number"
            value={formData.dimensions.length}
            onChange={(e) => updateFormData({ 
              dimensions: { ...formData.dimensions, length: e.target.value }
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Largo"
            required
          />
          <input
            type="number"
            value={formData.dimensions.width}
            onChange={(e) => updateFormData({ 
              dimensions: { ...formData.dimensions, width: e.target.value }
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ancho"
            required
          />
          <input
            type="number"
            value={formData.dimensions.height}
            onChange={(e) => updateFormData({ 
              dimensions: { ...formData.dimensions, height: e.target.value }
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Alto"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
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

export default CargoDetails;