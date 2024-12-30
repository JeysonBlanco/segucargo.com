import React, { useState, useMemo } from 'react';
import QuoteSteps from './QuoteSteps';
import QuoteProgress from './QuoteProgress';
import ServiceTypeSelector from './components/ServiceTypeSelector';
import { useQuoteState } from './hooks/useQuoteState';
import { ServiceType } from './types';

const LogisticsQuote = () => {
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const quoteState = useQuoteState(serviceType);

  if (!serviceType) {
    return <ServiceTypeSelector onSelect={setServiceType} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <QuoteProgress 
          currentStep={quoteState.currentStep} 
          serviceType={serviceType === 'moving' ? 'moving' : 'import-export'} 
        />
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <QuoteSteps 
            currentStep={quoteState.currentStep}
            setStep={quoteState.setStep}
            formData={quoteState.formData}
            updateFormData={quoteState.updateFormData}
            serviceType={serviceType}
          />
        </div>
      </div>
    </div>
  );
};

export default LogisticsQuote;