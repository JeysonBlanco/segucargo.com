import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import ErrorBoundary from './components/layout/ErrorBoundary';
import PrivateRoute from './components/auth/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LogisticsQuotePage from './pages/LogisticsQuotePage';
import MaritimeQuotePage from './pages/MaritimeQuotePage';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/quote" element={<LogisticsQuotePage />} />
              <Route path="/maritime-quote" element={<MaritimeQuotePage />} />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;