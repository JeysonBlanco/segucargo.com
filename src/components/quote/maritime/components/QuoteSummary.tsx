import React from 'react';
import { DollarSign, Ship, Clock } from 'lucide-react';
import { MaritimeQuoteData } from '../types';

interface QuoteSummaryProps {
  data: MaritimeQuoteData;
  totalCost: {
    freight: number;
    localCharges: number;
    customs: number;
    taxes: number;
  };
  currentStep: number;
}

const QuoteSummary = ({ data, totalCost, currentStep }: QuoteSummaryProps) => {
  const total = totalCost.freight + totalCost.localCharges + totalCost.customs + totalCost.taxes;
  const isComplete = currentStep === 4;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-[#001E5D] mb-6">
        Resumen de Costos
      </h2>

      {data.shipmentType ? (
        <div className="space-y-6">
          <div className="space-y-4">
            {totalCost.freight > 0 && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Ship className="h-5 w-5 text-[#2AD4AE]" />
                  <span className="text-sm text-gray-600">Flete Marítimo</span>
                </div>
                <span className="font-semibold">USD {totalCost.freight.toLocaleString()}</span>
              </div>
            )}

            {totalCost.localCharges > 0 && (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-[#2AD4AE]" />
                  <span className="text-sm text-gray-600">Gastos Locales</span>
                </div>
                <span className="font-semibold">USD {totalCost.localCharges.toLocaleString()}</span>
              </div>
            )}

            {isComplete && (
              <>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-[#2AD4AE]" />
                    <span className="text-sm text-gray-600">Derechos Aduaneros</span>
                  </div>
                  <span className="font-semibold">USD {totalCost.customs.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-[#2AD4AE]" />
                    <span className="text-sm text-gray-600">IVA</span>
                  </div>
                  <span className="font-semibold">USD {totalCost.taxes.toLocaleString()}</span>
                </div>
              </>
            )}

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#2AD4AE]" />
                <span className="text-sm text-gray-600">Tiempo Estimado</span>
              </div>
              <span className="font-semibold">32-35 días</span>
            </div>
          </div>

          {total > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-[#001E5D]">Total Estimado</span>
                <span className="text-2xl font-bold text-[#001E5D]">
                  USD {total.toLocaleString()}
                </span>
              </div>

              {isComplete && (
                <button className="w-full bg-[#2AD4AE] text-[#001E5D] py-3 px-4 rounded-lg hover:bg-[#001E5D] hover:text-white transition-colors duration-300">
                  Solicitar Cotización Formal
                </button>
              )}
            </div>
          )}
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

export default QuoteSummary;