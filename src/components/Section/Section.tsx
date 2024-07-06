import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import { VariantProps } from '../../types/cv.types';
import sectionVariants from './variants';

namespace Section {
  type Elements = 'section' | 'header' | 'aside' | 'footer';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentWithRef<
    Elements,
    VariantProps<typeof sectionVariants>
  >;
}

const Section = React.forwardRef((props: Section.Props, ref: Section.Ref) => {
  const {
    as,
    className,
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
    aspectRatio,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    radius,
    borderColor,
    backgroundColor,
    ...rest
  } = props;
  const Component = (as || 'section') as React.ElementType;

  return (
    <Component
      className={sectionVariants({
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
        aspectRatio,
        border,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,
        radius,
        borderColor,
        backgroundColor,
      })}
      {...rest}
    />
  );
});

export default Section;
