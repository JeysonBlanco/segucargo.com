import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from './caseStudyData';

const SuccessStories = () => (
  <div className="bg-[#E2E2E0] py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#001E5D] sm:text-4xl">
          Casos de Éxito
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Historias reales de clientes que transformaron su logística con SeguCargo
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  </div>
);