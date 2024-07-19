import React from 'react';
import {
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../../types/polymorphic.types';
import { VariantProps } from '../../types/cv.types';
import buttonVariants from './variants';

namespace Button {
  export type Ref = PolymorphicRef<'button'>;
  export type Props = PolymorphicComponentWithRef<
    'button',
    VariantProps<typeof buttonVariants>
  >;
}

const Button = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const {
    className,
    p,
    px,
    py,
    ps,
    pe,
    pt,
    pb,
    fontSize,
    fontWeight,
    width,
    height,
    size,
    radius,
    align,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
    color,
    cursor,
    opacity,
    disabled,
    borderColor,
    backgroundColor,
    transition,
    transitionDelay,
    transitionDuration,
    transitionTimingFunction,
    pseudos = { hover: { backgroundColor: 'primary-50' } },
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={buttonVariants({
        p,
        px,
        py,
        ps,
        pe,
        pt,
        pb,
        fontSize,
        fontWeight,
        width,
        height,
        size,
        cursor,
        radius,
        align,
        alignItems,
        alignContent,
        alignSelf,
        justifyContent,
        justifyItems,
        justifySelf,
        color,
        opacity: disabled ? 60 : opacity,
        borderColor,
        backgroundColor,
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

export default Button;
