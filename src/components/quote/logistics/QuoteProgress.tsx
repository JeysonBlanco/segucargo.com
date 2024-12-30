import React from 'react';
import { Check } from 'lucide-react';

const getSteps = (serviceType: 'import-export' | 'moving') => {
  if (serviceType === 'import-export') {
    return [
      { id: 1, name: 'Detalles de Carga' },
      { id: 2, name: 'Ruta y Servicios' },
      { id: 3, name: 'Resumen y Cotización' }
    ];
  }
  return [
    { id: 1, name: 'Detalles de Mudanza' },
    { id: 2, name: 'Origen y Destino' },
    { id: 3, name: 'Resumen y Cotización' }
  ];
};

interface QuoteProgressProps {
  currentStep: number;
  serviceType: 'import-export' | 'moving';
}

const QuoteProgress = ({ currentStep, serviceType }: QuoteProgressProps) => {
  const steps = getSteps(serviceType);
  const title = serviceType === 'import-export' ? 'Cotizador Logístico' : 'Cotizador de Mudanzas';

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[#001E5D]">{title}</h1>
      <nav aria-label="Progress">
        <ol className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} ${stepIdx !== 0 ? 'pl-8 sm:pl-20' : ''}`}>
              {stepIdx !== steps.length - 1 && (
                <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200">
                  <div
                    className="h-full bg-[#2AD4AE] transition-all duration-500"
                    style={{ width: currentStep > step.id ? '100%' : '0%' }}
                  />
                </div>
              )}
              <div className={`relative flex items-center justify-center ${currentStep === step.id ? 'animate-pulse' : ''}`}>
                <span className={`h-8 w-8 rounded-full border-2 flex items-center justify-center ${
                  currentStep > step.id 
                    ? 'bg-[#2AD4AE] border-[#2AD4AE]' 
                    : currentStep === step.id 
                    ? 'border-[#2AD4AE] text-[#2AD4AE]' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </span>
                <span className={`absolute -bottom-8 text-sm font-medium ${
                  currentStep >= step.id ? 'text-[#001E5D]' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default QuoteProgress;