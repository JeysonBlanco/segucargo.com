import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Shipment } from '../components/client/types';

export const useShipments = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const { data, error } = await supabase
          .from('shipments')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setShipments(data || []);
      } catch (err) {
        setError('Error al cargar los envíos');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShipments();
  }, []);

  return { shipments, isLoading, error };
};