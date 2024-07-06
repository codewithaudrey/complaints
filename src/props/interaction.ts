import { VariantMap } from '../types/cv.types';

const interaction = {
  cursor: {
    prefix: 'cursor',
    values: [
      'wait',
      'text',
      'move',
      'auto',
      'help',
      'alias',
      'pointer',
      'default',
      'progress',
      'not-allowed',
    ] as const,
  },
  pointer: {
    prefix: 'pointer',
    values: ['auto', 'none'] as const,
  },
  resize: {
    prefix: 'resize',
    values: ['none', 'both', 'horizontal', 'vertical'] as const,
  },
} satisfies VariantMap;

export default interaction;
