import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuoteSummaryItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface QuoteSummaryCardProps {
  title: string;
  items: QuoteSummaryItem[];
}

const QuoteSummaryCard = ({ title, items }: QuoteSummaryCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-[#001E5D] mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <item.icon className="h-5 w-5 text-[#2AD4AE]" />
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteSummaryCard;