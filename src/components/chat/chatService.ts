const FAQ_RESPONSES: Record<string, string> = {
  'horarios': 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hrs.',
  'contacto': 'Puedes contactarnos al +56 2 2345 6789 o escribirnos a contacto@segucargo.cl',
  'servicios': 'Ofrecemos servicios de transporte internacional, mudanzas globales y soluciones logísticas personalizadas.',
  'cotizacion': 'Para solicitar una cotización, puedes usar nuestro formulario en línea o contactar directamente a nuestro equipo comercial.',
  'tracking': 'Puedes rastrear tu envío ingresando a tu área de cliente con tu número de seguimiento.',
};

export const getAIResponse = async (input: string): Promise<string> => {
  // Simulated AI response based on keywords
  const lowercaseInput = input.toLowerCase();
  
  // Check for matching keywords in FAQ
  for (const [keyword, response] of Object.entries(FAQ_RESPONSES)) {
    if (lowercaseInput.includes(keyword)) {
      return response;
    }
  }

  // Default response
  return 'Para ayudarte mejor, ¿podrías proporcionar más detalles sobre tu consulta? También puedes contactar directamente con nuestro equipo de atención al cliente.';
};