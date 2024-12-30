import React from 'react';
import DirectionType from './DirectionType';
import ShipmentType from './ShipmentType';
import CargoDetails from './CargoDetails';
import RouteDetails from './RouteDetails';
import CustomsInfo from './CustomsInfo';
import { MaritimeQuoteData } from '../types';

interface QuoteStepsProps {
  currentStep: number;
  setStep: (step: number) => void;
  quoteData: MaritimeQuoteData;
  onUpdate: (data: Partial<MaritimeQuoteData>) => void;
}

const QuoteSteps = ({ currentStep, setStep, quoteData, onUpdate }: QuoteStepsProps) => {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DirectionType
            data={quoteData}
            onUpdate={onUpdate}
            onNext={() => setStep(2)}
          />
        );
      case 2:
        return (
          <ShipmentType
            data={quoteData}
            onUpdate={onUpdate}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        );
      case 3:
        return (
          <CargoDetails
            data={quoteData}
            onUpdate={onUpdate}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        );
      case 4:
        return (
          <RouteDetails
            data={quoteData}
            onUpdate={onUpdate}
            onNext={() => setStep(5)}
            onBack={() => setStep(3)}
          />
        );
      case 5:
        return (
          <CustomsInfo
            data={quoteData}
            onUpdate={onUpdate}
            onBack={() => setStep(4)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {renderStep()}
    </div>
  );
};

export default QuoteSteps;