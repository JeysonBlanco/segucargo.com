import { useState, useCallback } from 'react';
import { QuoteFormData, ServiceType } from '../types';

const getInitialFormData = (serviceType: ServiceType | null): QuoteFormData => ({
  serviceType: serviceType || 'import',
  cargoType: '',
  weight: '',
  dimensions: { length: '', width: '', height: '' },
  origin: '',
  destination: '',
  services: [],
  incoterm: '',
  ...(serviceType === 'moving' ? {
    roomCount: '',
    moveDate: '',
    packingService: false,
    storageNeeded: false,
  } : {}),
});

export const useQuoteState = (serviceType: ServiceType | null) => {
  const [currentStep, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(getInitialFormData(serviceType));

  const updateFormData = useCallback((newData: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  }, []);

  return {
    currentStep,
    setStep,
    formData,
    updateFormData,
  };
};