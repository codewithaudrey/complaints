import { VariantMap } from '../types/cv.types';

const COLORS = ['white', 'black', 'current', 'transparent', 'inherit'] as const;

const color = {
  text: {
    prefix: 'text',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: COLORS,
  },
  background: {
    prefix: 'bg',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: COLORS,
  },
  border: {
    prefix: 'border',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: COLORS,
  },
} satisfies VariantMap;

export default color;
