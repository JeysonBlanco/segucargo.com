import React from 'react';
import { DollarSign, Calendar, Ship } from 'lucide-react';
import { MaritimeQuoteData } from '../types';

interface CostSummaryProps {
  data: MaritimeQuoteData;
}

const CostSummary = ({ data }: CostSummaryProps) => {
  const isFormComplete = data.containerType && data.origin && data.destination && data.incoterm;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-[#001E5D] mb-6">Resumen de Costos</h2>
      
      {isFormComplete ? (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Ship className="h-5 w-5 text-[#2AD4AE]" />
                <span className="text-sm text-gray-600">Flete Marítimo</span>
              </div>
              <span className="font-semibold">USD 2,500</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-[#2AD4AE]" />
                <span className="text-sm text-gray-600">Gastos Locales</span>
              </div>
              <span className="font-semibold">USD 500</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-[#2AD4AE]" />
                <span className="text-sm text-gray-600">Tiempo Estimado</span>
              </div>
              <span className="font-semibold">32 días</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-[#001E5D]">Total Estimado</span>
              <span className="text-2xl font-bold text-[#001E5D]">USD 3,000</span>
            </div>
            
            <button className="w-full bg-[#2AD4AE] text-[#001E5D] py-3 px-4 rounded-lg hover:bg-[#001E5D] hover:text-white transition-colors duration-300">
              Solicitar Cotización Formal
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Ship className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p>Complete los datos del embarque para ver los costos estimados</p>
        </div>
      )}
    </div>
  );
};

export default CostSummary;