import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ShipmentTracker from '../components/client/ShipmentTracker';
import DocumentList from '../components/client/DocumentList';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<ShipmentTracker />} />
        <Route path="/documents" element={<DocumentList />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;