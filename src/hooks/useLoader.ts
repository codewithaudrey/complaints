import { useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';

const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error('LoaderProvider is not available');
  }

  return context;
};

export default useLoader;
