import { buttonTokens, buttonUtils, alertTokens, avatarTokens, avatarUtils, badgeTokens, badgeUtils } from './tokens/'
import { generateThemeToSize, palette } from '../utils'
import { DefineConfigType } from 'pinceau/index'

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
    ...badgeTokens.size
  },
  radii: {
    ...badgeTokens.radii
  }
}

const defaultUtils = {
  ...buttonUtils,
  ...avatarUtils,
  ...badgeUtils
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
  info: palette('indigo')
}

export default {
  ...defaultTokens,
  color: defaultColor,
  utils: defaultUtils
} as DefineConfigType
