import React from 'react';
import { ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import { StepProps } from '../types';

const DirectionType = ({ data, onUpdate, onNext }: StepProps) => {
  const handleSelect = (direction: 'import' | 'export') => {
    onUpdate({ direction });
    onNext?.();
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#001E5D] mb-4">
          ¿Qué operación deseas realizar?
        </h2>
        <p className="text-gray-600">
          Selecciona el tipo de operación para comenzar tu cotización marítima
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => handleSelect('import')}
          className="group p-8 rounded-xl border-2 transition-all hover:border-[#2AD4AE] hover:bg-[#2AD4AE]/5"
        >
          <div className="flex flex-col items-center">
            <div className="p-4 bg-[#001E5D] rounded-full group-hover:bg-[#2AD4AE] transition-colors">
              <ArrowDownToLine className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#001E5D] mt-4 mb-2">
              Importación
            </h3>
            <p className="text-gray-600 text-center">
              Traer mercancías desde el extranjero hacia Chile
            </p>
          </div>
        </button>

        <button
          onClick={() => handleSelect('export')}
          className="group p-8 rounded-xl border-2 transition-all hover:border-[#2AD4AE] hover:bg-[#2AD4AE]/5"
        >
          <div className="flex flex-col items-center">
            <div className="p-4 bg-[#001E5D] rounded-full group-hover:bg-[#2AD4AE] transition-colors">
              <ArrowUpFromLine className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#001E5D] mt-4 mb-2">
              Exportación
            </h3>
            <p className="text-gray-600 text-center">
              Enviar mercancías desde Chile hacia el extranjero
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DirectionType;