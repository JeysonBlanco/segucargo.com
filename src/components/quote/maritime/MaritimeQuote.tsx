import React, { useState } from 'react';
import QuoteHeader from './components/QuoteHeader';
import ShipmentDetails from './components/ShipmentDetails';
import RouteSelection from './components/RouteSelection';
import CostSummary from './components/CostSummary';
import { MaritimeQuoteData } from './types';

const MaritimeQuote = () => {
  const [quoteData, setQuoteData] = useState<MaritimeQuoteData>({
    containerType: '',
    quantity: 1,
    weight: '',
    origin: '',
    destination: '',
    incoterm: '',
    cargo: {
      type: '',
      description: '',
      hazardous: false
    }
  });

  const handleUpdateQuote = (data: Partial<MaritimeQuoteData>) => {
    setQuoteData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <QuoteHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ShipmentDetails 
              data={quoteData} 
              onUpdate={handleUpdateQuote} 
            />
            <RouteSelection 
              data={quoteData} 
              onUpdate={handleUpdateQuote} 
            />
          </div>
          <div className="lg:col-span-1">
            <CostSummary data={quoteData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeQuote;