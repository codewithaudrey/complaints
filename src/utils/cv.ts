import { PseudosVariants, VariantMap, Variants } from '../types/cv.types';

// remove any and infer the real type of value
const helper = (array: string[], value: any, prefix: string) => {
  switch (typeof value) {
    case 'object':
      return Object.entries(value).forEach(([breakpoint, entryValue]) => {
        const prefixedValue =
          breakpoint === 'initial'
            ? `${prefix}-${entryValue}`
            : `${breakpoint}:${prefix}-${entryValue}`;

        if (entryValue !== undefined) {
          array.push(prefixedValue);
        }
      });
    case 'undefined':
      return;
    default:
      return array.push(`${prefix}-${value}`);
  }
};

const cv =
  <Map extends VariantMap>(args: {
    variants: Map;
    defaultVariants?: Variants<Map>;
  }) =>
  (
    props: Variants<Map> & {
      className?: string;
      pseudos?: PseudosVariants<Map>;
    }
  ) => {
    const { variants, defaultVariants } = args;
    const { className, pseudos, ...prop } = props;
    const result: string[] = [];

    if (defaultVariants) {
      Object.entries(defaultVariants).map(([key, value]) => {
        const entry = variants[key];
        return helper(result, value, entry.prefix);
      });
    }

    Object.entries(prop).forEach(([key, value]) => {
      const variant = variants[key];

      if (value && variant) {
        variant.values.forEach((v) => {
          const index = result.findIndex(
            (data) => data === `${variant.prefix}-${v}`
          );
          if (index !== -1) {
            result.splice(index, 1);
            return;
          }
        });
        helper(result, value, variant.prefix);
      }
    });

    if (pseudos) {
      Object.entries(pseudos).map(([pseudo, object]) => {
        return Object.entries(object).map(([key, value]) => {
          const variant = variants[key];
          const prefix = `${pseudo}:${variant.prefix}`;
          return helper(result, value, prefix);
        });
      });
    }

    if (props.className) {
      result.push(props.className);
    }

    return result.length > 0 ? result.join(' ') : undefined;
  };

export default cv;
