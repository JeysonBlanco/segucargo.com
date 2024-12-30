import React from 'react';
import { MapPin, Anchor } from 'lucide-react';
import { MaritimeQuoteData } from '../types';

interface RouteSelectionProps {
  data: MaritimeQuoteData;
  onUpdate: (data: Partial<MaritimeQuoteData>) => void;
}

const RouteSelection = ({ data, onUpdate }: RouteSelectionProps) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#001E5D] mb-6">Ruta y Condiciones</h2>
    
    <div className="space-y-6">
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
          >
            <option value="">Seleccionar...</option>
            <option value="CLSAI">San Antonio, Chile</option>
            <option value="CLVAP">Valparaíso, Chile</option>
            <option value="CLIQQ">Iquique, Chile</option>
          </select>
        </div>
      </div>

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
        >
          <option value="">Seleccionar...</option>
          <option value="FOB">FOB - Free On Board</option>
          <option value="CFR">CFR - Cost and Freight</option>
          <option value="CIF">CIF - Cost, Insurance & Freight</option>
        </select>
      </div>
    </div>
  </div>
);

export default RouteSelection;