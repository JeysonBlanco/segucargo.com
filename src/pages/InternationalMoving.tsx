import React from 'react';
import ServiceHeader from '../components/services/ServiceHeader';
import ProcessTimeline from '../components/services/ProcessTimeline';

const movingSteps = [
  {
    title: "Consulta Inicial",
    description: "Evaluación detallada de sus necesidades de mudanza"
  },
  {
    title: "Inventario y Presupuesto",
    description: "Catalogamos sus bienes y preparamos un presupuesto personalizado"
  },
  {
    title: "Embalaje Profesional",
    description: "Embalamos sus pertenencias con materiales de primera calidad"
  },
  {
    title: "Gestión Aduanera",
    description: "Tramitamos todos los documentos necesarios para la exportación/importación"
  },
  {
    title: "Transporte Internacional",
    description: "Transportamos sus bienes de manera segura hasta el destino"
  },
  {
    title: "Desembalaje e Instalación",
    description: "Desembalamos y colocamos sus pertenencias en su nuevo hogar"
  }
];

const InternationalMoving = () => (
  <div>
    <ServiceHeader
      title="Mudanzas Internacionales"
      description="Servicio personalizado de mudanzas internacionales puerta a puerta"
      image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#001E5D] mb-16">
          Proceso de Mudanza Internacional
        </h2>
        <ProcessTimeline steps={movingSteps} />
      </div>
    </div>
  </div>
);