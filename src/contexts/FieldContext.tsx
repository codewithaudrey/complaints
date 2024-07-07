import {
  useField,
  FieldMetaProps,
  FieldInputProps,
  FieldHelperProps,
} from 'formik';
import React, { createContext } from 'react';

type Context = {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  helper: FieldHelperProps<any>;
};

namespace FieldProvider {
  export type Props = {
    name: string;
    children: ((props: Context) => React.ReactNode) | React.ReactNode;
  };
}

export const FieldContext = createContext<Context | null>(null);

const FieldProvider = ({ name, children }: FieldProvider.Props) => {
  const [field, meta, helper] = useField(name);

  return (
    <FieldContext.Provider value={{ field, meta, helper }}>
      {typeof children === 'function'
        ? children({ field, meta, helper })
        : children}
    </FieldContext.Provider>
  );
};

export default FieldProvider;
