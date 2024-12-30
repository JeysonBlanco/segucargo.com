import React from 'react';
import { Package, FileText, LogOut } from 'lucide-react';
import ShipmentTracker from './ShipmentTracker';
import DocumentList from './DocumentList';
import { useAuth } from '../../hooks/useAuth';

const ClientDashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#001E5D] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Área de Cliente</h1>
              <p className="text-sm text-gray-300">{user?.email}</p>
            </div>
            <button
              onClick={signOut}
              className="flex items-center px-4 py-2 text-sm bg-[#2AD4AE] text-[#001E5D] rounded-md hover:bg-white transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Package className="h-6 w-6 text-[#2AD4AE]" />
              <h2 className="text-xl font-semibold ml-2">Rastrear Envíos</h2>
            </div>
            <ShipmentTracker />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-[#2AD4AE]" />
              <h2 className="text-xl font-semibold ml-2">Documentos</h2>
            </div>
            <DocumentList />
          </div>
        </div>
      </div>
    </div>
  );
};