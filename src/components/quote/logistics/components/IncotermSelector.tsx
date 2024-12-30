import React from 'react';
import { Info } from 'lucide-react';

interface IncotermSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const incoterms = [
  { value: 'EXW', label: 'EXW - Ex Works' },
  { value: 'FOB', label: 'FOB - Free on Board' },
  { value: 'CIF', label: 'CIF - Cost, Insurance & Freight' },
  { value: 'DDP', label: 'DDP - Delivered Duty Paid' },
];

const IncotermSelector = ({ value, onChange }: IncotermSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        <div className="flex items-center space-x-2">
          <span>Incoterm</span>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
        required
      >
        <option value="">Seleccionar Incoterm...</option>
        {incoterms.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default IncotermSelector;