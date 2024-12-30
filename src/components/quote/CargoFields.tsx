import React from 'react';
import { QuoteFormData } from './types';

interface CargoFieldsProps {
  formData: QuoteFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CargoFields = ({ formData, onChange }: CargoFieldsProps) => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo de Carga</label>
        <input
          type="text"
          name="cargoType"
          value={formData.cargoType || ''}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          placeholder="Ej: Contenedor 20'"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Peso Aproximado</label>
        <input
          type="text"
          name="weight"
          value={formData.weight || ''}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          placeholder="Ej: 1000 kg"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Origen</label>
        <input
          type="text"
          name="origin"
          value={formData.origin}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Destino</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          required
        />
      </div>
    </div>
  </>
);