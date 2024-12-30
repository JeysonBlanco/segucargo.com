import React from 'react';
import ServiceHeader from '../components/services/ServiceHeader';
import ProcessTimeline from '../components/services/ProcessTimeline';

const corporateSteps = [
  {
    title: "Análisis de Necesidades",
    description: "Evaluación completa de sus requerimientos logísticos"
  },
  {
    title: "Diseño de Solución",
    description: "Desarrollo de una solución logística personalizada"
  },
  {
    title: "Implementación",
    description: "Puesta en marcha de la solución diseñada"
  },
  {
    title: "Optimización de Procesos",
    description: "Mejora continua de los procesos logísticos"
  },
  {
    title: "Monitoreo y Control",
    description: "Seguimiento constante y reportes de desempeño"
  },
  {
    title: "Mejora Continua",
    description: "Evaluación y ajuste constante de la solución"
  }
];

const CorporateSolutions = () => (
  <div>
    <ServiceHeader
      title="Soluciones Empresariales"
      description="Soluciones logísticas personalizadas para empresas"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#001E5D] mb-16">
          Proceso de Implementación
        </h2>
        <ProcessTimeline steps={corporateSteps} />
      </div>
    </div>
  </div>
);