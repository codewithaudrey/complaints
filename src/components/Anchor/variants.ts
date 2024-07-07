import color from '../../props/color';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const anchorVariants = cv({
  variants: {
    size: typography.size,
    align: typography.align,
    weight: typography.weight,
    listStyle: typography.listStyle,
    transform: typography.transform,
    decoration: typography.decoration,
    color: color.text,
  },
  defaultVariants: {
    size: 16,
    weight: 500,
    decoration: 'none',
    color: 'blue-80',
  },
});

export default anchorVariants;
