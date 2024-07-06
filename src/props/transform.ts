import { VariantMap } from '../types/cv.types';

const transform = {
  scale: {
    prefix: 'scale',
    responsive: true,
    pseudos: ['hover', 'active', 'focus'],
    values: [0, 25, 50, 75, 80, 90, 95, 100, 125, 150] as const,
  },
  rotate: {
    prefix: 'rotate',
    responsive: true,
    pseudos: ['active', 'focus', 'hover'],
    values: [0, 2, 4, 8, 45, 90, 180] as const,
  },
  translateX: {
    prefix: 'translate-x',
    responsive: true,
    pseudos: ['hover', 'active', 'focus'],
    values: [0, 2, 4, 8, 10, 12, 16] as const,
  },
  translateY: {
    prefix: 'translate-y',
    responsive: true,
    pseudos: ['hover', 'active', 'focus'],
    values: [0, 2, 4, 8, 10, 12, 16] as const,
  },
  skewX: {
    prefix: 'skew-x',
    responsive: true,
    pseudos: ['hover', 'active', 'focus'],
    values: [0, 2, 4, 8, 45, 90, 180] as const,
  },
  skewY: {
    prefix: 'skew-x',
    responsive: true,
    pseudos: ['hover', 'active', 'focus'],
    values: [0, 2, 4, 8, 45, 90, 180] as const,
  },
  origin: {
    prefix: 'origin',
    values: [
      'top',
      'bottom',
      'left',
      'right',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ] as const,
  },
} satisfies VariantMap;

export default transform;
