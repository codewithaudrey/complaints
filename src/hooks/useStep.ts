import { useContext } from 'react';
import { StepContext } from '../contexts/StepContext';

const useStep = () => {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error('StepProvider is not available');
  }

  return context;
};

export default useStep;
