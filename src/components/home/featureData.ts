import { Shield, Clock, Globe, Award, Users, HeartHandshake } from 'lucide-react';
import { FeatureType } from './types';

export const features: FeatureType[] = [
  {
    title: "Experiencia Comprobada",
    description: "Más de 25 años en el mercado internacional",
    icon: Award
  },
  {
    title: "Cobertura Global",
    description: "Red de agentes en más de 120 países",
    icon: Globe
  },
  {
    title: "Servicio 24/7",
    description: "Soporte y seguimiento en tiempo real",
    icon: Clock
  },
  {
    title: "Seguridad Garantizada",
    description: "100% de envíos asegurados",
    icon: Shield
  },
  {
    title: "Equipo Especializado",
    description: "Personal altamente capacitado",
    icon: Users
  },
  {
    title: "Servicio Personalizado",
    description: "Soluciones adaptadas a cada cliente",
    icon: HeartHandshake
  }
];