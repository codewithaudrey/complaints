import { VariantMap } from '../types/cv.types';

const flex = {
  flex: {
    prefix: 'flex',
    responsive: true,
    values: ['auto', 'initial', 'none', 'full'] as const,
  },
  wrap: {
    prefix: 'flex',
    responsive: true,
    values: ['nowrap', 'wrap', 'wrap-reverse'] as const,
  },
  directions: {
    prefix: 'flex',
    responsive: true,
    values: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
  },
  basis: {
    prefix: 'basis',
    responsive: true,
    values: [
      '1/12',
      '2/12',
      '3/12',
      '4/12',
      '5/12',
      '6/12',
      '7/12',
      '8/12',
      '9/12',
      '10/12',
      '11/12',
      'full',
    ] as const,
  },
} satisfies VariantMap;

export default flex;
