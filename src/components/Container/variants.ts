import border from '../../props/border';
import color from '../../props/color';
import layout from '../../props/layout';
import spacing from '../../props/spacing';
import cv from '../../utils/cv';

const containerVariants = cv({
  variants: {
    p: spacing.p,
    px: spacing.px,
    py: spacing.py,
    ps: spacing.ps,
    pe: spacing.pe,
    pt: spacing.pt,
    pb: spacing.pb,
    m: spacing.m,
    mx: spacing.mx,
    my: spacing.my,
    ms: spacing.ms,
    me: spacing.me,
    mt: spacing.mt,
    mb: spacing.mb,
    display: layout.display,
    position: layout.position,
    container: layout.container,
    aspectRatio: layout.aspectRatio,
    border: border.width,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.left,
    borderRight: border.right,
    radius: border.radius,
    backgroundColor: color.background,
    borderColor: color.border,
  },
  defaultVariants: {
    mx: 'auto',
    container: 'sm',
    display: 'block',
  },
});

export default containerVariants;
