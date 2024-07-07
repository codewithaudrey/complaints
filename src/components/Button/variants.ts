import border from '../../props/border';
import color from '../../props/color';
import distribution from '../../props/distribution';
import interaction from '../../props/interaction';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transition from '../../props/transition';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const buttonVariants = cv({
  variants: {
    p: spacing.p,
    px: spacing.px,
    py: spacing.py,
    ps: spacing.ps,
    pe: spacing.pe,
    pt: spacing.pt,
    pb: spacing.pb,
    width: sizing.width,
    height: sizing.height,
    size: sizing.size,
    radius: border.radius,
    display: layout.display,
    fontSize: typography.size,
    fontWeight: typography.weight,
    align: typography.align,
    color: color.text,
    cursor: interaction.cursor,
    backgroundColor: color.background,
    borderColor: color.border,
    alignItems: distribution.alignItems,
    alignSelf: distribution.alignSelf,
    alignContent: distribution.alignContent,
    justifySelf: distribution.justifySelf,
    justifyContent: distribution.justifyContent,
    justifyItems: distribution.justifyItems,
    transition: transition.property,
    transitionDuration: transition.duration,
    transitionDelay: transition.delay,
    transitionTimingFunction: transition.timing,
  },
  defaultVariants: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'primary-60',
    px: 'lg',
    height: 48,
    radius: 'max',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all',
    transitionDuration: 300,
    transitionTimingFunction: 'ease-in-out',
  },
});

export default buttonVariants;
