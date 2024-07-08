import { createContext, SetStateAction, useState } from 'react';

type Context = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
};

namespace LoaderProvider {
  export type Props = {
    children: React.ReactNode;
    onLoad?: ((...args: any[]) => boolean) | boolean;
  };
}

export const LoaderContext = createContext<Context | null>(null);

const LoaderProvider = ({ children, onLoad = false }: LoaderProvider.Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(onLoad);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
