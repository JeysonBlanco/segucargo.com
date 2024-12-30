import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package, FileText } from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-5 px-2">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-[#001E5D] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Package className="mr-3 h-5 w-5" />
          Rastrear Envíos
        </NavLink>
        <NavLink
          to="/dashboard/documents"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              isActive
                ? 'bg-[#001E5D] text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <FileText className="mr-3 h-5 w-5" />
          Documentos
        </NavLink>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;