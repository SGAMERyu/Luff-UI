import { buttonTokens, buttonUtils, alertTokens, avatarTokens, avatarUtils, badgeTokens, badgeUtils } from './tokens/'
import { generateThemeToSize, palette } from '../utils'
import { DefineConfigType } from 'pinceau/index'

const defaultTokens = {
  fontSize: {
    ...generateThemeToSize([12, 14, 16, 20, 24])
  },
  size: {
    ...buttonTokens.size,
    ...alertTokens.size,
    ...avatarTokens.size,
    ...badgeTokens.size
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
