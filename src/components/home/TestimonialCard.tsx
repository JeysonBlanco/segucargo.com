import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from './types';

const TestimonialCard = ({ name, company, content, image }: TestimonialType) => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
    <div className="flex items-center mb-4">
      <img
        className="h-12 w-12 rounded-full"
        src={image}
        alt={name}
      />
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-[#001E5D]">{name}</h4>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default TestimonialCard;