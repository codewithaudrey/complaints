import { VariantMap } from '../types/cv.types';

const layout = {
  aspectRatio: {
    prefix: 'aspect-ratio',
    responsive: true,
    values: ['16/9', '9/16', '4/3', '1/1'] as const,
  },
  display: {
    prefix: 'display',
    responsive: true,
    values: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'grid',
      'inline-flex',
      'inline-grid',
    ] as const,
  },
  objectFit: {
    prefix: 'object-fit',
    values: ['fill', 'contain', 'cover', 'scale-down'] as const,
  },
  position: {
    prefix: 'position',
    responsive: true,
    values: ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const,
  },
  visibility: {
    prefix: 'visibility',
    values: ['visible', 'hidden', 'collapse'] as const,
  },
  container: {
    prefix: 'container',
    values: ['xs', 'sm', 'md', 'lg', 'xl'] as const,
  },
} satisfies VariantMap;

export default layout;
