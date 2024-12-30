import React, { useState } from 'react';
import { Ship } from 'lucide-react';
import QuoteSteps from './steps/QuoteSteps';
import QuoteSummary from './components/QuoteSummary';
import { MaritimeQuoteData } from './types';
import { calculateTotalCost } from './utils/calculations';

const MaritimeQuoteV2 = () => {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState<MaritimeQuoteData>({
    direction: '',
    shipmentType: '',
    containerType: '',
    quantity: 1,
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    origin: '',
    destination: '',
    incoterm: '',
    cargo: {
      type: '',
      description: '',
      hsCode: '',
      value: '',
      hazardous: false
    }
  });

  const handleUpdateQuote = (data: Partial<MaritimeQuoteData>) => {
    setQuoteData(prev => ({ ...prev, ...data }));
  };

  const totalCost = calculateTotalCost(quoteData);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#001E5D] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Ship className="h-12 w-12 text-[#2AD4AE] mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold">Cotizador Marítimo Online</h1>
            <p className="text-gray-300 mt-2 max-w-2xl text-sm md:text-base">
              Calcula el costo de tu carga marítima en tiempo real
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <QuoteSteps
              currentStep={step}
              setStep={setStep}
              quoteData={quoteData}
              onUpdate={handleUpdateQuote}
            />
          </div>
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-20">
              <QuoteSummary
                data={quoteData}
                totalCost={totalCost}
                currentStep={step}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeQuoteV2;