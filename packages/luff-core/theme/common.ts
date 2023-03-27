import { buttonTokens, alertTokens, avatarTokens, badgeTokens, chipTokens } from './tokens/'
import { generateThemeToSize, palette } from '../utils'

const defaultTokens = {
  fontSize: {
    ...generateThemeToSize([12, 14, 16, 18, 20]),
    ...buttonTokens.fontSize,
    ...avatarTokens.fontSize
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
    ...avatarTokens.radii
  },
  space: {
    ...chipTokens.space
  },
  borderWidth: {
    ...avatarTokens.borderWidth
  }
}

const defaultColor = {
  // misc
  white: '#ffffff',
  midOpacityWhite: 'rgba(255, 255, 255, 0.5)',
  black: '#000000',
  // brand
  primary: palette('blue'),
  danger: palette('red'),
  warning: palette('yellow'),
  success: palette('green'),
  info: palette('indigo'),
  neutral: palette('neutral')
}

export default {
  ...defaultTokens,
  color: defaultColor,
  utils: {}
}
