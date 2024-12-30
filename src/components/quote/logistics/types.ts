export type ServiceType = 'import' | 'export' | 'moving';
export type TransportMode = 'sea' | 'air' | 'land';
export type TransportSubtype = 
  | 'fcl' 
  | 'lcl' 
  | 'general' 
  | 'courier' 
  | 'ftl-national' 
  | 'ltl-national' 
  | 'ftl-international' 
  | 'ltl-international';

export interface QuoteFormData {
  serviceType: ServiceType;
  transportMode?: TransportMode;
  transportSubtype?: TransportSubtype;
  cargoType: string;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  origin: string;
  destination: string;
  services: string[];
  incoterm: string;
  // Moving specific fields
  roomCount?: string;
  moveDate?: string;
  packingService?: boolean;
  storageNeeded?: boolean;
}

export interface StepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;
  onNext?: () => void;
  onBack?: () => void;
}