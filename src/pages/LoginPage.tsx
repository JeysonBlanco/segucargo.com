import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import SEOHead from '../components/seo/SEOHead';

const LoginPage = () => {
  return (
    <>
      <SEOHead
        title="Iniciar Sesión"
        description="Accede a tu área de cliente para gestionar tus envíos y documentos"
      />
      <LoginForm />
    </>
  );
};

export default LoginPage;