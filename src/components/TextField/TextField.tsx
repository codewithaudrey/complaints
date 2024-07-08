import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import { VariantProps } from '../../types/cv.types';
import textFieldVariants from './variants';
import useField from '../../hooks/useField';

const elements = ['input', 'textarea'] as const;

namespace TextField {
  export type Ref = PolymorphicRef<(typeof elements)[number]>;
  export type Props = PolymorphicComponentWithRef<
    (typeof elements)[number],
    VariantProps<typeof textFieldVariants>
  >;
}

const TextField = React.forwardRef(
  (props: TextField.Props, ref: TextField.Ref) => {
    const {
      as,
      style,
      className,
      onChange,
      p,
      px,
      py,
      ps,
      pe,
      pt,
      pb,
      border,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      color,
      borderColor,
      borderStyle,
      width,
      height,
      size,
      align,
      weight,
      pseudos = { placeholder: { color: 'gray-60' } },
      ...rest
    } = props;
    const Component = (as || 'input') as React.ElementType;
    const { meta, helper } = useField();

    const handleChange = (e: any) => {
      helper.setValue(e.target.value);
      onChange && onChange(e);
    };

    const handleBlur = () => helper.setTouched(false);
    const handleFocus = () => helper.setTouched(true);

    const defaultStyle: React.CSSProperties = {
      outline: 'none',
    };

    return (
      <Component
        ref={ref}
        className={textFieldVariants({
          p,
          px,
          py,
          ps,
          pe,
          pt,
          pb,
          border,
          borderTop,
          borderBottom,
          borderLeft,
          borderRight,
          color,
          borderColor,
          borderStyle,
          width,
          height,
          size,
          align,
          weight,
          className,
          pseudos,
        })}
        value={meta.value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    );
  }
);

export default TextField;
