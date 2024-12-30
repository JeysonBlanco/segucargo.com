import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import Breadcrumbs from '../layout/Breadcrumbs';
import { useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const items = [{ label: 'Dashboard', href: '/dashboard' }];
    if (location.pathname.includes('documents')) {
      items.push({ label: 'Documentos', href: '/dashboard/documents' });
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Breadcrumbs items={getBreadcrumbs()} />
          <div className="mt-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;