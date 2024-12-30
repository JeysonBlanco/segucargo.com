export type ServiceType = 'cargo' | 'moving';

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  origin: string;
  destination: string;
  cargoType?: string;
  weight?: string;
  volume?: string;
  roomCount?: string;
  moveDate?: string;
}