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

type VariantsMap<T extends VariantMap> = T[keyof T]['responsive'] extends true
  ?
      | T[keyof T]['values'][number]
      | { [key in Breakpoints]?: T[keyof T]['values'][number] }
  : T[keyof T]['values'][number];

export type Variants<T extends VariantMap> = {
  [K in keyof T]?: VariantsMap<T>;
};

export type PseudosVariants<T extends VariantMap> = {
  [key in Pseudos]?: {
    [K in keyof T]?: T[K]['pseudos'] extends Array<Pseudos>
      ? VariantsMap<T>
      : never;
  };
};

export type VariantProps<T extends (...args: any) => any> = Parameters<T>[0];
