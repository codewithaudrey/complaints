import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import { VariantProps } from '../../types/cv.types';
import boxVariants from './variants';

namespace Box {
  type Elements = 'div' | 'span';
  export type Ref = PolymorphicRef<Elements>;
  export type Props = PolymorphicComponentWithRef<
    Elements,
    VariantProps<typeof boxVariants>
  >;
}

const Box = React.forwardRef((props: Box.Props, ref: Box.Ref) => {
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
    spaceX,
    spaceY,
    display,
    position,
    aspectRatio,
    border,
    borderTop,
    borderBottom,
    borderRight,
    borderLeft,
    divideX,
    divideY,
    radius,
    borderColor,
    backgroundColor,
    opacity,
    alignSelf,
    justifySelf,
    placeSelf,
    flex,
    flexBasis,
    gridColumnSpan,
    gridRowSpan,
    cursor,
    pointerEvent,
    resize,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    scale,
    rotate,
    skewX,
    skewY,
    translateX,
    translateY,
    transition,
    transitionDelay,
    transitionDuration,
    transitionTimingFunction,
    pseudos,
    ...rest
  } = props;
  const Component = (as || 'div') as React.ElementType;

  return (
    <Component
      ref={ref}
      className={boxVariants({
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
        spaceX,
        spaceY,
        display,
        position,
        aspectRatio,
        border,
        borderTop,
        borderBottom,
        borderRight,
        borderLeft,
        divideX,
        divideY,
        radius,
        borderColor,
        backgroundColor,
        opacity,
        alignSelf,
        justifySelf,
        placeSelf,
        flex,
        flexBasis,
        gridColumnSpan,
        gridRowSpan,
        cursor,
        pointerEvent,
        resize,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        scale,
        rotate,
        skewX,
        skewY,
        translateX,
        translateY,
        transition,
        transitionDelay,
        transitionDuration,
        transitionTimingFunction,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Box;
