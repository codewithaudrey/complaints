import { PseudosVariants, VariantMap, Variants } from '../types/cv.types';

// remove any and infer the real type of value
const helper = (array: string[], value: any, prefix: string) => {
  const removeExisting = (prefix: string) => {
    const index = array.findIndex((item) => item.startsWith(prefix));

    // check if it is not last element
    if (index !== -1) {
      array.splice(index, 1);
    }
  };

  removeExisting(prefix);

  switch (typeof value) {
    case 'object':
      return Object.entries(value).forEach(([breakpoint, value]) => {
        if (value !== undefined) {
          array.push(
            breakpoint === 'initial'
              ? `${prefix}-${value}`
              : `${breakpoint}:${prefix}-${value}`
          );
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

      if (variant && value) {
        return helper(result, value, variant.prefix);
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
