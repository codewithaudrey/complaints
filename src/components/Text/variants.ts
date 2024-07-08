import color from '../../props/color';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const textVariants = cv({
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    listStyle: typography.listStyle,
    color: color.text,
  },
  defaultVariants: {
    size: 16,
    weight: 400,
    color: 'gray-10',
  },
});

export default textVariants;
