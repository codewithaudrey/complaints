import React from 'react';

type AsProps<Type extends React.ElementType> = {
  as?: Type;
};

type PropsToOmit<
  Type extends React.ElementType,
  Props extends {}
> = keyof (Props & AsProps<Type>);

export type PolymorphicRef<Type extends React.ElementType> =
  React.ComponentPropsWithRef<Type>['ref'];

export type PolymorphicComponent<
  Type extends React.ElementType,
  Props extends {}
> = AsProps<Type> &
  Props &
  Omit<React.ComponentPropsWithoutRef<Type>, PropsToOmit<Type, Props>>;

export type PolymorphicComponentWithRef<
  Type extends React.ElementType,
  Props extends {}
> = PolymorphicComponent<Type, Props> & { ref?: PolymorphicRef<Type> };
