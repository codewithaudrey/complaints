import border from '../../props/border';
import color from '../../props/color';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const textFieldVariants = cv({
  variants: {
    p: spacing.p,
    px: spacing.px,
    py: spacing.py,
    ps: spacing.ps,
    pe: spacing.pe,
    pt: spacing.pt,
    pb: spacing.pb,
    size: typography.size,
    align: typography.align,
    weight: typography.weight,
    border: border.width,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.left,
    borderRight: border.right,
    borderStyle: border.style,
    color: color.text,
    borderColor: color.border,
    backgroundColor: color.background,
    width: sizing.width,
    height: sizing.height,
  },
  defaultVariants: {
    px: 'sm',
    size: 16,
    weight: 400,
    height: 'full',
    width: 'full',
    color: 'white',
    backgroundColor: 'inherit',
  },
});

export default textFieldVariants;
