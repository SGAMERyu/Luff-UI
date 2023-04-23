import { buttonTokens, alertTokens, avatarTokens, badgeTokens, chipTokens, tooltipTokens, dividerTokens, headingTokens } from './tokens/'
import { generateThemeToSize, palette } from '../utils'
import { blue, red, gray, green, yellow, indigo } from './colors'

const defaultTokens = {
  fontSize: {
    ...generateThemeToSize([12, 14, 16, 18, 20]),
    ...buttonTokens.fontSize,
    ...avatarTokens.fontSize,
    ...badgeTokens.fontSize,
    ...headingTokens.fontSize,
  },
  size: {
    ...buttonTokens.size,
    ...alertTokens.size,
    ...avatarTokens.size,
    ...badgeTokens.size,
    ...chipTokens.size
  },
  radii: {
    ...badgeTokens.radii,
    ...chipTokens.radii,
    ...avatarTokens.radii,
    ...tooltipTokens.radii
  },
  space: {
    ...chipTokens.space,
    ...tooltipTokens.space,
    ...avatarTokens.space,
    ...badgeTokens.space,
    ...dividerTokens.space
  },
  borderWidth: {
    ...avatarTokens.borderWidth
  },
  opacity: {
    ...avatarTokens.opacity
  }
}

const defaultColor = {
  // misc
  white: '#ffffff',
  midOpacityWhite: 'rgba(255, 255, 255, 0.5)',
  black: '#000000',
  // color
  indigo,
  yellow,
  green,
  blue,
  red,
  gray,
  textDisabled: '#9DA7BE',
  disabled: '#edf0f8',
  // brand
  primary: palette('blue'),
  danger: palette('red'),
  warning: palette('yellow'),
  success: palette('green'),
  info: palette('indigo'),
  neutral: palette('gray'),
  ...tooltipTokens.colors
}

export default {
  ...defaultTokens,
  color: defaultColor,
  utils: {}
}
