import React, { useState } from 'react';
import { Package, Home } from 'lucide-react';
import { ServiceType, QuoteFormData } from './types';
import CargoFields from './CargoFields';
import MovingFields from './MovingFields';

const QuoteForm = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('cargo');
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'cargo',
    origin: '',
    destination: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#001E5D] mb-6">Solicitar Cotización</h2>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setServiceType('cargo')}
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center ${
            serviceType === 'cargo'
              ? 'bg-[#001E5D] text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Package className="mr-2 h-5 w-5" />
          Carga Internacional
        </button>
        <button
          onClick={() => setServiceType('moving')}
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center ${
            serviceType === 'moving'
              ? 'bg-[#001E5D] text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Home className="mr-2 h-5 w-5" />
          Mudanza Internacional
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
              required
            />
          </div>
        </div>

        {serviceType === 'cargo' ? (
          <CargoFields formData={formData} onChange={handleInputChange} />
        ) : (
          <MovingFields formData={formData} onChange={handleInputChange} />
        )}

        <button
          type="submit"
          className="w-full bg-[#2AD4AE] text-[#001E5D] py-3 px-6 rounded-md hover:bg-[#001E5D] hover:text-white transition-colors duration-300"
        >
          Solicitar Cotización
        </button>
      </form>
    </div>
  );
};