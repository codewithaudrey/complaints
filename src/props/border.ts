import { VariantMap } from '../types/cv.types';

const BORDER_WIDTH = ['none', 1, 2, 4, 8] as const;

const border = {
  width: {
    prefix: 'border',
    values: BORDER_WIDTH,
  },
  top: {
    prefix: 'border-top',
    values: BORDER_WIDTH,
  },
  bottom: {
    prefix: 'border-bottom',
    values: BORDER_WIDTH,
  },
  left: {
    prefix: 'border-left',
    values: BORDER_WIDTH,
  },
  right: {
    prefix: 'border-right',
    values: BORDER_WIDTH,
  },
  divideX: {
    prefix: 'divide-x',
    values: BORDER_WIDTH,
  },
  divideY: {
    prefix: 'divide-y',
    values: BORDER_WIDTH,
  },
  style: {
    prefix: 'border',
    values: ['solid', 'dotted', 'dashed', 'double', 'none'] as const,
  },
  radius: {
    prefix: 'radius',
    values: [
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
      'max',
    ] as const,
  },
} satisfies VariantMap;

export default border;
