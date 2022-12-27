import { buttonTokens, buttonUtils } from './tokens/button'
import { generateThemeToSize, palette } from '../utils'

const defaultTokens = {
  fontSize: {
    ...generateThemeToSize([12, 14, 16, 20, 24])
  },
  size: {
    ...buttonTokens.size
  }
}

const defaultUtils = {
  ...buttonUtils
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
}
