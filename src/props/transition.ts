import { VariantMap } from '../types/cv.types';

const transition = {
  transition: {
    prefix: 'transition',
    values: ['all', 'colors', 'shadows', 'opacity', 'transform'] as const,
  },
  duration: {
    prefix: 'transition-duration',
    values: [0, 100, 150, 200, 300, 500, 750, 1000] as const,
  },
  delay: {
    prefix: 'transition-delay',
    values: [0, 100, 150, 200, 300, 500, 750, 1000] as const,
  },
  timing: {
    prefix: 'transition-timing',
    values: ['ease-out', 'ease-in', 'ease-in-out', 'ease', 'linear'],
  },
} satisfies VariantMap;

export default transition;
