import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  container: Element | DocumentFragment | null;
};

const Portal = ({ children, container }: PortalProps) => {
  if (container === null) {
    return null;
  }

  return createPortal(children, container);
};

export default Portal;
