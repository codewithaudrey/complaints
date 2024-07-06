import { VariantMap } from '../types/cv.types';

const effect = {
  opacity: {
    prefix: 'opacity',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 100] as const,
  },
} as VariantMap;

export default effect;
