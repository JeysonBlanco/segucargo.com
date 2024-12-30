import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CaseStudy } from './types';

const CaseStudyCard = ({ title, company, description, image, metrics }: CaseStudy) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <div className="relative h-48">
      <img
        src={image}
        alt={company}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001E5D]/80 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{company}</h3>
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-semibold text-[#001E5D] mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl font-bold text-[#2AD4AE]">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
      <button className="flex items-center text-[#001E5D] hover:text-[#002DA4] transition-colors">
        Ver caso completo
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);