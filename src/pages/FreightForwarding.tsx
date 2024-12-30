import React from 'react';
import ServiceHeader from '../components/services/ServiceHeader';
import ProcessTimeline from '../components/services/ProcessTimeline';

const freightSteps = [
  {
    title: "Cotización y Planificación",
    description: "Evaluamos sus necesidades y proporcionamos una cotización detallada"
  },
  {
    title: "Documentación y Aduanas",
    description: "Gestionamos todos los trámites aduaneros y documentación necesaria"
  },
  {
    title: "Recolección y Embalaje",
    description: "Recogemos y embalamos su carga según estándares internacionales"
  },
  {
    title: "Transporte Internacional",
    description: "Transportamos su carga vía marítima, aérea o terrestre"
  },
  {
    title: "Seguimiento en Tiempo Real",
    description: "Monitoreo constante del estado y ubicación de su carga"
  },
  {
    title: "Entrega Final",
    description: "Entregamos su carga en el destino final en perfectas condiciones"
  }
];

const FreightForwarding = () => (
  <div>
    <ServiceHeader
      title="Transporte de Carga Internacional"
      description="Soluciones logísticas integrales para el transporte de su carga a nivel global"
      image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#001E5D] mb-16">
          Proceso de Transporte Internacional
        </h2>
        <ProcessTimeline steps={freightSteps} />
      </div>
    </div>
  </div>
);