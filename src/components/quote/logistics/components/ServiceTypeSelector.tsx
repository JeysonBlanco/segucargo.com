import React from 'react';
import { Ship, ArrowDownToLine, ArrowUpFromLine, Home } from 'lucide-react';

interface ServiceTypeSelectorProps {
  onSelect: (type: 'import' | 'export' | 'moving') => void;
}

const ServiceTypeSelector = ({ onSelect }: ServiceTypeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#001E5D] mb-6 font-archia">
            ¿Qué servicio necesitas?
          </h2>
          <p className="text-xl text-gray-600">
            Selecciona el tipo de servicio para obtener una cotización online personalizada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Importación */}
          <button
            onClick={() => onSelect('import')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#001E5D]/5 to-transparent group-hover:from-[#2AD4AE]/10 transition-colors" />
            <div className="relative p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-[#001E5D] rounded-full group-hover:bg-[#2AD4AE] transition-colors transform group-hover:scale-110 duration-300">
                  <ArrowDownToLine className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#001E5D] mb-3 font-archia">
                    Importación
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Traslada mercancías desde cualquier parte del mundo hacia tu país
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Exportación */}
          <button
            onClick={() => onSelect('export')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#001E5D]/5 to-transparent group-hover:from-[#2AD4AE]/10 transition-colors" />
            <div className="relative p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-[#001E5D] rounded-full group-hover:bg-[#2AD4AE] transition-colors transform group-hover:scale-110 duration-300">
                  <ArrowUpFromLine className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#001E5D] mb-3 font-archia">
                    Exportación
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Envía tus productos a cualquier destino internacional
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Mudanza Internacional */}
          <button
            onClick={() => onSelect('moving')}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#001E5D]/5 to-transparent group-hover:from-[#2AD4AE]/10 transition-colors" />
            <div className="relative p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-[#001E5D] rounded-full group-hover:bg-[#2AD4AE] transition-colors transform group-hover:scale-110 duration-300">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#001E5D] mb-3 font-archia">
                    Mudanza Internacional
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Traslada tus pertenencias a tu nuevo hogar en el extranjero
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelector;