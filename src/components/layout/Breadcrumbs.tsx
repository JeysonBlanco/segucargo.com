import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav className="flex px-4 py-2 text-sm text-gray-600">
    <a href="/" className="flex items-center hover:text-[#001E5D]">
      <Home className="h-4 w-4" />
      <span className="sr-only">Inicio</span>
    </a>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <a
          href={item.href}
          className={`hover:text-[#001E5D] ${
            index === items.length - 1 ? 'text-[#001E5D] font-medium' : ''
          }`}
        >
          {item.label}
        </a>
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumbs;