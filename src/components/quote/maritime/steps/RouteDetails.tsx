import React from 'react';
import { MapPin, Anchor, Calendar } from 'lucide-react';
import { StepProps } from '../types';

const RouteDetails = ({ data, onUpdate, onNext, onBack }: StepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#001E5D]">
        Ruta y Condiciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#2AD4AE]" />
              <span>Puerto de Origen</span>
            </div>
          </label>
          <select
            value={data.origin}
            onChange={(e) => onUpdate({ origin: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="CNSHA">Shanghai, China</option>
            <option value="CNNGB">Ningbo, China</option>
            <option value="KRPUS">Busan, Corea del Sur</option>
            <option value="TWKHH">Kaohsiung, Taiwán</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#2AD4AE]" />
              <span>Puerto de Destino</span>
            </div>
          </label>
          <select
            value={data.destination}
            onChange={(e) => onUpdate({ destination: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="CLSAI">San Antonio, Chile</option>
            <option value="CLVAP">Valparaíso, Chile</option>
            <option value="CLIQQ">Iquique, Chile</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <Anchor className="h-4 w-4 text-[#2AD4AE]" />
              <span>Incoterm</span>
            </div>
          </label>
          <select
            value={data.incoterm}
            onChange={(e) => onUpdate({ incoterm: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            required
          >
            <option value="">Seleccionar...</option>
            <option value="FOB">FOB - Free On Board</option>
            <option value="CFR">CFR - Cost and Freight</option>
            <option value="CIF">CIF - Cost, Insurance & Freight</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#2AD4AE]" />
              <span>Fecha Estimada de Embarque</span>
            </div>
          </label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            min={new Date().toISOString().split('T')[0]}
            required
          />
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

export default RouteDetails;