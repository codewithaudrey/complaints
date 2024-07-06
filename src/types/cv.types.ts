export type Breakpoints = 'initial' | 'sm' | 'md' | 'lg';
type Pseudos = 'hover' | 'focus' | 'active' | 'placeholder';
type VariantValues = readonly (string | number)[];

export type variantConfig = {
  prefix: string;
  responsive?: boolean;
  pseudos?: Pseudos[];
  values: VariantValues;
};

export type VariantMap = { [key: string]: variantConfig };

// type VariantValue<T extends Record<string>> = T['responsive'] extends true
//   ? T['values'][number] | { [key in Breakpoints]?: T['values'][number] }
//   : T['values'][number];

export type Variants<T extends VariantMap> = {
  [K in keyof T]?: T[K]['responsive'] extends true
    ? T[K]['values'][number] | { [key in Breakpoints]?: T[K]['values'][number] }
    : T[K]['values'][number];
};

export type PseudosVariants<T extends VariantMap> = {
  [key in Pseudos]?: {
    [K in keyof T]?: T[K]['pseudos'] extends Array<Pseudos>
      ? T[K]['responsive'] extends true
        ?
            | T[K]['values'][number]
            | { [key in Breakpoints]?: T[K]['values'][number] }
        : T[K]['values'][number]
      : never;
  };
};

export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0];
