import border from '../../props/border';
import color from '../../props/color';
import distribution from '../../props/distribution';
import effect from '../../props/effect';
import flex from '../../props/flex';
import grid from '../../props/grid';
import interaction from '../../props/interaction';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import cv from '../../utils/cv';

const boxVariants = cv({
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
    spaceX: spacing.spaceX,
    spaceY: spacing.spaceY,
    display: layout.display,
    position: layout.position,
    aspectRatio: layout.aspectRatio,
    border: border.width,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.left,
    borderRight: border.right,
    divideX: border.divideX,
    divideY: border.divideY,
    radius: border.radius,
    backgroundColor: color.background,
    borderColor: color.border,
    opacity: effect.opacity,
    alignSelf: distribution.alignSelf,
    placeSelf: distribution.placeSelf,
    justifySelf: distribution.justifySelf,
    flex: flex.flex,
    flexBasis: flex.basis,
    gridColumnSpan: grid.columnSpan,
    gridRowSpan: grid.rowSpan,
    cursor: interaction.cursor,
    pointerEvent: interaction.pointer,
    resize: interaction.resize,
    size: sizing.size,
    width: sizing.width,
    minWidth: sizing.minWidth,
    maxWidth: sizing.maxWidth,
    height: sizing.height,
    minHeight: sizing.minHeight,
    maxHeight: sizing.maxHeight,
    scale: transform.scale,
    rotate: transform.rotate,
    skewX: transform.skewX,
    skewY: transform.skewY,
    origin: transform.origin,
    translateX: transform.translateX,
    translateY: transform.translateY,
    transition: transition.property,
    transitionDelay: transition.delay,
    transitionDuration: transition.duration,
    transitionTimingFunction: transition.timing,
  },
  defaultVariants: {},
});

export default boxVariants;
