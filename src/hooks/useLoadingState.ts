import { useState } from 'react';

export const useLoadingState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (loading) setError(null);
  };

  return {
    isLoading,
    error,
    setLoading,
    setError,
  };
};