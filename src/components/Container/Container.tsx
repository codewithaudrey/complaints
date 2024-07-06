import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import containerVariants from './variants';
import { VariantProps } from '../../types/cv.types';

namespace Container {
  type Elements = 'div' | 'span';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentWithRef<
    Elements,
    VariantProps<typeof containerVariants>
  >;
}

const Container = React.forwardRef(
  (props: Container.Props, ref: Container.Ref) => {
    const {
      as,
      p,
      px,
      py,
      ps,
      pe,
      pt,
      pb,
      m,
      mx,
      my,
      ms,
      me,
      mt,
      mb,
      display,
      position,
      container,
      border,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      radius,
      borderColor,
      backgroundColor,
      pseudos,
      className,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={containerVariants({
          p,
          px,
          py,
          ps,
          pe,
          pt,
          pb,
          m,
          mx,
          my,
          ms,
          me,
          mt,
          mb,
          display,
          position,
          container,
          border,
          borderTop,
          borderBottom,
          borderLeft,
          borderRight,
          radius,
          borderColor,
          backgroundColor,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Container;
