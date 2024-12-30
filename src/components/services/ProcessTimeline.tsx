import React, { useState } from 'react';
import ProcessStep from './ProcessStep';

interface Step {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-300" />
            )}
            <ProcessStep
              step={index + 1}
              title={step.title}
              description={step.description}
              isActive={index + 1 <= activeStep}
              isCompleted={index + 1 < activeStep}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index + 1)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index + 1 <= activeStep ? 'bg-[#2AD4AE]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}