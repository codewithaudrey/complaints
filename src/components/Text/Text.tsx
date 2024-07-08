import React from 'react';
import { VariantProps } from '../../types/cv.types';
import textVariants from './variants';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';

namespace Text {
  type Elements =
    | 'p'
    | 'span'
    | 'label'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentWithRef<
    Elements,
    VariantProps<typeof textVariants>
  >;
}

const Text = React.forwardRef((props: Text.Props, ref: Text.Ref) => {
  const {
    as,
    size,
    align,
    weight,
    color,
    transform,
    listStyle,
    className,
    pseudos,
    ...rest
  } = props;
  const Component = (as || 'span') as React.ElementType;

  return (
    <Component
      ref={ref}
      className={textVariants({
        size,
        align,
        weight,
        color,
        transform,
        listStyle,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Text;
