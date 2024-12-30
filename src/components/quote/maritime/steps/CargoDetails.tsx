import React from 'react';
import { Package, Weight, Ruler, AlertTriangle } from 'lucide-react';
import { StepProps } from '../types';

const CargoDetails = ({ data, onUpdate, onNext, onBack }: StepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#001E5D]">
        Detalles de la Carga
      </h2>

      {data.shipmentType === 'FCL' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-[#2AD4AE]" />
                <span>Tipo de Contenedor</span>
              </div>
            </label>
            <select
              value={data.containerType}
              onChange={(e) => onUpdate({ containerType: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
              required
            >
              <option value="">Seleccionar...</option>
              <option value="20ST">20' Standard</option>
              <option value="40ST">40' Standard</option>
              <option value="40HC">40' High Cube</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Weight className="h-4 w-4 text-[#2AD4AE]" />
                <span>Peso Total (kg)</span>
              </div>
            </label>
            <input
              type="number"
              value={data.weight}
              onChange={(e) => onUpdate({ weight: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
              placeholder="Ej: 20000"
              required
            />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center space-x-2">
                  <Ruler className="h-4 w-4 text-[#2AD4AE]" />
                  <span>Largo (cm)</span>
                </div>
              </label>
              <input
                type="number"
                value={data.dimensions.length}
                onChange={(e) => onUpdate({
                  dimensions: { ...data.dimensions, length: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center space-x-2">
                  <Ruler className="h-4 w-4 text-[#2AD4AE]" />
                  <span>Ancho (cm)</span>
                </div>
              </label>
              <input
                type="number"
                value={data.dimensions.width}
                onChange={(e) => onUpdate({
                  dimensions: { ...data.dimensions, width: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <div className="flex items-center space-x-2">
                  <Ruler className="h-4 w-4 text-[#2AD4AE]" />
                  <span>Alto (cm)</span>
                </div>
              </label>
              <input
                type="number"
                value={data.dimensions.height}
                onChange={(e) => onUpdate({
                  dimensions: { ...data.dimensions, height: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Weight className="h-4 w-4 text-[#2AD4AE]" />
                <span>Peso Total (kg)</span>
              </div>
            </label>
            <input
              type="number"
              value={data.weight}
              onChange={(e) => onUpdate({ weight: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
              placeholder="Ej: 500"
              required
            />
          </div>
        </div>
      )}

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-[#2AD4AE]" />
            <span>Tipo de Mercancía</span>
          </div>
        </label>
        <input
          type="text"
          value={data.cargo.description}
          onChange={(e) => onUpdate({
            cargo: { ...data.cargo, description: e.target.value }
          })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          placeholder="Descripción de la mercancía"
          required
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={data.cargo.hazardous}
            onChange={(e) => onUpdate({
              cargo: { ...data.cargo, hazardous: e.target.checked }
            })}
            className="rounded border-gray-300 text-[#2AD4AE] focus:ring-[#2AD4AE]"
          />
          <span className="text-sm text-gray-700">Mercancía Peligrosa (IMO)</span>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 text-gray-600 hover:text-gray-900"
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

export default CargoDetails;