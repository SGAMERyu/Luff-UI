import { generateThemeToSize, palette } from '../utils'

const defaultTokens = {
  fontSizes: {
    ...generateThemeToSize([12, 14, 16, 20, 24])
  }
}

const defaultUtils = {}

const defaultColors = {
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
  colors: defaultColors,
  utils: defaultUtils
}
