import React from 'react';
import CargoDetails from './steps/CargoDetails';
import RouteServices from './steps/RouteServices';
import QuoteSummary from './steps/QuoteSummary';
import { QuoteFormData } from './types';

interface QuoteStepsProps {
  currentStep: number;
  setStep: (step: number) => void;
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

const QuoteSteps = ({ currentStep, setStep, formData, updateFormData }: QuoteStepsProps) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CargoDetails formData={formData} updateFormData={updateFormData} onNext={() => setStep(2)} />;
      case 2:
        return <RouteServices formData={formData} updateFormData={updateFormData} onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <QuoteSummary formData={formData} onBack={() => setStep(2)} />;
      default:
        return null;
    }
  };

  return <div className="mt-8">{renderStep()}</div>;
};

export default QuoteSteps;