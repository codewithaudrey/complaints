import { VariantMap } from '../types/cv.types';

const VALUES = [
  'auto',
  'fit',
  'full',
  'max',
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
  '12/12',
  0,
  1,
  2,
  4,
  8,
  12,
  16,
  20,
  24,
  32,
  40,
  48,
  56,
  64,
  80,
  128,
  256,
  320,
  400,
  480,
  560,
  640,
  800,
  992,
] as const;

const sizing = {
  width: {
    prefix: 'w',
    responsive: true,
    values: VALUES,
  },
  minWidth: {
    prefix: 'min-w',
    responsive: true,
    values: VALUES,
  },
  maxWidth: {
    prefix: 'max-w',
    responsive: true,
    values: VALUES,
  },
  height: {
    prefix: 'h',
    responsive: true,
    values: VALUES,
  },
  minHeight: {
    prefix: 'min-h',
    responsive: true,
    values: VALUES,
  },
  maxHeight: {
    prefix: 'max-h',
    responsive: true,
    values: VALUES,
  },
} satisfies VariantMap;

export default sizing;
