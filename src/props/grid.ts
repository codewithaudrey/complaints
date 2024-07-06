import { VariantMap } from '../types/cv.types';

const grid = {
  column: {
    prefix: 'grid-column',
    responsive: true,
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid'] as const,
  },
  row: {
    prefix: 'grid-row',
    responsive: true,
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid'] as const,
  },
  columnSpan: {
    prefix: 'grid-column-span',
    responsive: true,
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'full'] as const,
  },
  rowSpan: {
    prefix: 'grid-row-span',
    responsive: true,
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'full'] as const,
  },
} satisfies VariantMap;

export default grid;
