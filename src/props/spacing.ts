import { VariantMap } from '../types/cv.types';

const VALUES = [
  'auto',
  'none',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
  '10xl',
  '11xl',
  '12xl',
  'max',
] as const;

const spacing = {
  m: {
    prefix: 'm',
    responsive: true,
    values: VALUES,
  },
  ms: {
    prefix: 'ms',
    responsive: true,
    values: VALUES,
  },
  me: {
    prefix: 'me',
    responsive: true,
    values: VALUES,
  },
  mt: {
    prefix: 'mt',
    responsive: true,
    values: VALUES,
  },
  mb: {
    prefix: 'mb',
    responsive: true,
    values: VALUES,
  },
  mx: {
    prefix: 'mx',
    responsive: true,
    values: VALUES,
  },
  my: {
    prefix: 'my',
    responsive: true,
    values: VALUES,
  },
  p: {
    prefix: 'p',
    responsive: true,
    values: VALUES,
  },
  ps: {
    prefix: 'ps',
    responsive: true,
    values: VALUES,
  },
  pe: {
    prefix: 'pe',
    responsive: true,
    values: VALUES,
  },
  pt: {
    prefix: 'pt',
    responsive: true,
    values: VALUES,
  },
  pb: {
    prefix: 'pb',
    responsive: true,
    values: VALUES,
  },
  px: {
    prefix: 'px',
    responsive: true,
    values: VALUES,
  },
  py: {
    prefix: 'py',
    responsive: true,
    values: VALUES,
  },
  spaceX: {
    prefix: 'space-x',
    responsive: true,
    values: VALUES,
  },
  spaceY: {
    prefix: 'space-y',
    responsive: true,
    values: VALUES,
  },
  gap: {
    prefix: 'gap',
    responsive: true,
    values: VALUES,
  },
  gapX: {
    prefix: 'gap-x',
    responsive: true,
    values: VALUES,
  },
  gapY: {
    prefix: 'gap-y',
    responsive: true,
    values: VALUES,
  },
} satisfies VariantMap;

export default spacing;
