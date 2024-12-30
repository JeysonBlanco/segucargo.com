export interface MaritimeQuoteData {
  direction: 'import' | 'export' | '';
  shipmentType: 'FCL' | 'LCL' | '';
  containerType: string;
  quantity: number;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  origin: string;
  destination: string;
  incoterm: string;
  cargo: {
    type: string;
    description: string;
    hsCode: string;
    value: string;
    hazardous: boolean;
  };
}

export interface StepProps {
  data: MaritimeQuoteData;
  onUpdate: (data: Partial<MaritimeQuoteData>) => void;
  onNext?: () => void;
  onBack?: () => void;
}