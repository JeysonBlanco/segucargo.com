import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

const WhyChooseUs = () => {
  return (
    <div className="bg-[#E2E2E0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#001E5D] sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nuestra experiencia y compromiso nos distinguen
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;