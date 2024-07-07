import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('ModalContext is not available');
  }
  return context;
};

export default useModal;
