import React, { createContext, SetStateAction, useState } from 'react';

type Context = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

namespace ModalProvider {
  export type Props = {
    children: ((props: Context) => React.ReactNode) | React.ReactNode;
    open?: boolean;
  };
}

export const ModalContext = createContext<Context | null>(null);

const ModalProvider = ({ children, open = false }: ModalProvider.Props) => {
  const [isOpen, setIsOpen] = useState(open);

  if (isOpen) {
    document.querySelector('body')?.classList.add('portal');
  } else {
    document.querySelector('body')?.classList.remove('portal');
  }

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function'
        ? children({ isOpen, setIsOpen })
        : children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
