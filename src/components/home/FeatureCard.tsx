import React from 'react';
import { FeatureType } from './types';

const FeatureCard = ({ title, description, icon: Icon }: FeatureType) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#001E5D] text-[#2AD4AE]">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-[#001E5D]">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default FeatureCard;