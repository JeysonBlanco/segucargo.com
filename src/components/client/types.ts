export interface TimelineEvent {
  title: string;
  date: string;
  location?: string;
  completed: boolean;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  description: string;
  status: ShipmentStatus;
  timeline: TimelineEvent[];
}

export type ShipmentStatus = 'En Tránsito' | 'Entregado' | 'En Proceso' | 'Retenido';

export interface Document {
  id: string;
  name: string;
  date: string;
  url: string;
  type: string;
}