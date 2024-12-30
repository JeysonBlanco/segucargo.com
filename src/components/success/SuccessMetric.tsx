import React from 'react';

interface SuccessMetricProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const SuccessMetric = ({ value, label, prefix, suffix }: SuccessMetricProps) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-[#001E5D]">
      {prefix}{value}{suffix}
    </p>
    <p className="mt-2 text-sm text-gray-600">{label}</p>
  </div>
);