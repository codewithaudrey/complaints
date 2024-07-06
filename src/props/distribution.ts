import { VariantMap } from '../types/cv.types';

const ITEMS = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
const SELF = ['auto', 'start', 'end', 'baseline', 'stretch'] as const;
const CONTENT = [
  'normal',
  'start',
  'end',
  'center',
  'justify',
  'between',
  'evenly',
  'stretch',
  'baseline',
] as const;

const distribution = {
  alignItems: {
    prefix: 'items',
    responsive: true,
    values: ITEMS,
  },
  alignContent: {
    prefix: 'content',
    responsive: true,
    values: CONTENT,
  },
  alignSelf: {
    prefix: 'self',
    responsive: true,
    values: SELF,
  },
  justifyItems: {
    prefix: 'justify-items',
    responsive: true,
    values: ITEMS,
  },
  justifyContent: {
    prefix: 'justify-content',
    responsive: true,
    values: CONTENT,
  },
  justifySelf: {
    prefix: 'justify-self',
    responsive: true,
    values: SELF,
  },
  placeItems: {
    prefix: 'place-items',
    responsive: true,
    values: ITEMS,
  },
  placeContent: {
    prefix: 'place-content',
    responsive: true,
    values: CONTENT,
  },
  placeSelf: {
    prefix: 'place-self',
    responsive: true,
    values: SELF,
  },
} satisfies VariantMap;

export default distribution;
