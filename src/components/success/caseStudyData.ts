import { CaseStudy } from './types';

export const caseStudies: CaseStudy[] = [
  {
    title: "Expansión Internacional Exitosa",
    company: "TechGlobal Chile",
    description: "Facilitamos la expansión de TechGlobal a 5 países de Latinoamérica, reduciendo costos logísticos en un 30%.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    metrics: [
      { value: "30%", label: "Reducción de Costos" },
      { value: "5", label: "Países Alcanzados" },
      { value: "48h", label: "Tiempo de Respuesta" },
      { value: "99.9%", label: "Entregas a Tiempo" }
    ]
  },
  {
    title: "Mudanza Corporativa Integral",
    company: "Minera del Pacífico",
    description: "Coordinamos la mudanza de 200 empleados a nuevas oficinas en 3 países, sin interrupciones operativas.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    metrics: [
      { value: "200+", label: "Empleados Reubicados" },
      { value: "3", label: "Países" },
      { value: "0", label: "Días de Interrupción" },
      { value: "100%", label: "Satisfacción" }
    ]
  },
  {
    title: "Optimización de Cadena de Suministro",
    company: "AgroExport S.A.",
    description: "Implementamos una solución logística que redujo el tiempo de exportación en un 40% para productos perecederos.",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    metrics: [
      { value: "40%", label: "Menor Tiempo" },
      { value: "25+", label: "Países Destino" },
      { value: "500+", label: "Envíos Mensuales" },
      { value: "0%", label: "Pérdidas" }
    ]
  }
];