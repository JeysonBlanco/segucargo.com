import React from 'react';
import { Package, Weight, AlertTriangle } from 'lucide-react';
import { MaritimeQuoteData } from '../types';

interface ShipmentDetailsProps {
  data: MaritimeQuoteData;
  onUpdate: (data: Partial<MaritimeQuoteData>) => void;
}

const ShipmentDetails = ({ data, onUpdate }: ShipmentDetailsProps) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold text-[#001E5D] mb-6">Detalles del Embarque</h2>
    
    <div className="space-y-6">
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
          >
            <option value="">Seleccionar...</option>
            <option value="20ST">Contenedor 20' Standard</option>
            <option value="40ST">Contenedor 40' Standard</option>
            <option value="40HC">Contenedor 40' High Cube</option>
            <option value="LCL">Carga Suelta (LCL)</option>
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
            placeholder="Ej: 1000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-[#2AD4AE]" />
            <span>Tipo de Carga</span>
          </div>
        </label>
        <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={data.cargo.description}
            onChange={(e) => onUpdate({ 
              cargo: { ...data.cargo, description: e.target.value }
            })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
            placeholder="Descripción de la mercancía"
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
      </div>
    </div>
  </div>
);

export default ShipmentDetails;