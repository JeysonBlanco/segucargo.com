import React from 'react';
import { Check } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
  isCompleted: boolean;
}

const ProcessStep = ({ step, title, description, isActive, isCompleted }: ProcessStepProps) => {
  return (
    <div className={`relative flex items-center ${isActive ? 'opacity-100' : 'opacity-60'}`}>
      <div className="flex items-center relative z-10">
        <div className={`
          flex items-center justify-center w-10 h-10 rounded-full
          ${isCompleted ? 'bg-[#2AD4AE]' : isActive ? 'bg-[#001E5D]' : 'bg-gray-300'}
          transition-colors duration-300
        `}>
          {isCompleted ? (
            <Check className="w-6 h-6 text-white" />
          ) : (
            <span className="text-white font-semibold">{step}</span>
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-[#001E5D]">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}