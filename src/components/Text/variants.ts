import typography from '../../props/typography';
import cv from '../../utils/cv';

const textVariants = cv({
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    listStyle: typography.listStyle,
  },
  defaultVariants: {
    size: 16,
    weight: 400,
  },
});

export default textVariants;
