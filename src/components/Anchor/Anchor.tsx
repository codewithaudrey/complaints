import React from 'react';
import {
  PolymorphicRef,
  PolymorphicComponentWithRef,
} from '../../types/polymorphic.types';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { VariantProps } from '../../types/cv.types';
import anchorVariants from './variants';

namespace Anchor {
  export type Ref = PolymorphicRef<'a'>;
  export type Props = PolymorphicComponentWithRef<
    'a',
    NavLinkProps & VariantProps<typeof anchorVariants>
  >;
}

const Anchor = React.forwardRef((props: Anchor.Props, ref: Anchor.Ref) => {
  const {
    className,
    size,
    align,
    weight,
    transform,
    listStyle,
    color,
    pseudos = { hover: { decoration: 'underline' } },
    ...rest
  } = props;

  return (
    <NavLink
      ref={ref}
      className={anchorVariants({
        size,
        weight,
        align,
        transform,
        listStyle,
        color,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Anchor;
