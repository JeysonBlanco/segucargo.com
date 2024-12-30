import React from 'react';
import { DollarSign, FileText } from 'lucide-react';
import { StepProps } from '../types';

const CustomsInfo = ({ data, onUpdate, onBack }: StepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#001E5D]">
        Información para Aduana
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-[#2AD4AE]" />
              <span>Código HS</span>
            </div>
          </label>
          <input
            type="text"
            value={data.cargo.hsCode}
            onChange={(e) => onUpdate({
              cargo: { ...data.cargo, hsCode: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ej: 8471.30.00"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-[#2AD4AE]" />
              <span>Valor FOB (USD)</span>
            </div>
          </label>
          <input
            type="number"
            value={data.cargo.value}
            onChange={(e) => onUpdate({
              cargo: { ...data.cargo, value: e.target.value }
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Ej: 10000"
            required
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-700">
          El código HS (Sistema Armonizado) es necesario para determinar los aranceles e impuestos aplicables a su importación.
        </p>
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
          className="px-6 py-2 bg-[#2AD4AE] text-[#001E5D] rounded-md hover:bg-[#001E5D] hover:text-white transition-colors"
        >
          Solicitar Cotización
        </button>
      </div>
    </form>
  );
};

export default CustomsInfo;