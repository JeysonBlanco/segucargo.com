import React from 'react';

interface ServiceHeaderProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHeader = ({ title, description, image }: ServiceHeaderProps) => (
  <div className="relative bg-[#001E5D] py-24">
    <div className="absolute inset-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-20"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  </div>
);