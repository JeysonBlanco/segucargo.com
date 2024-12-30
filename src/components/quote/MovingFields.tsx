import React from 'react';
import { QuoteFormData } from './types';

interface MovingFieldsProps {
  formData: QuoteFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovingFields = ({ formData, onChange }: MovingFieldsProps) => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Número de Habitaciones</label>
        <input
          type="number"
          name="roomCount"
          value={formData.roomCount || ''}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
          placeholder="Ej: 3"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha Estimada</label>
        <input
          type="date"
          name="moveDate"
          value={formData.moveDate || ''}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
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