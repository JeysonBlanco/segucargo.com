import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contacto" className="bg-[#E2E2E0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#001E5D] sm:text-4xl">
            Contáctenos
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aquí para ayudarle con sus necesidades logísticas
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2AD4AE] focus:ring-[#2AD4AE]"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#001E5D] hover:bg-[#002DA4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2AD4AE]"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#2AD4AE]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Teléfono</p>
                    <p className="mt-1 text-gray-600">+56 2 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#2AD4AE]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-gray-600">contacto@segucargo.cl</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#2AD4AE]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Dirección</p>
                    <p className="mt-1 text-gray-600">
                      Av. Apoquindo 4700, Of. 1601<br />
                      Las Condes, Santiago<br />
                      Chile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;