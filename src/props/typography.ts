import { VariantMap } from '../types/cv.types';

const typography = {
  size: {
    prefix: 'text',
    responsive: true,
    pseudos: ['hover', 'active', 'focus', 'placeholder'],
    values: [12, 13, 14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 80] as const,
  },
  weight: {
    prefix: 'weight',
    pseudos: ['hover', 'active', 'focus', 'placeholder'],
    values: [400, 500, 600, 700] as const,
  },
  align: {
    prefix: 'text',
    responsive: true,
    values: ['left', 'center', 'right', 'start', 'end', 'justify'] as const,
  },
  transform: {
    prefix: 'text',
    values: ['capitalize', 'uppercase', 'lowercase'] as const,
  },
  decoration: {
    prefix: 'decoration',
    pseudos: ['hover', 'active', 'placeholder', 'focus'],
    values: [
      'none',
      'inherit',
      'underline',
      'overline',
      'line-through',
    ] as const,
  },
  listStyle: {
    prefix: 'list',
    values: ['none', 'disc', 'circle', 'dotted', 'numbers'] as const,
  },
} satisfies VariantMap;

export default typography;
