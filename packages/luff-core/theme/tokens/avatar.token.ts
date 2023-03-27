import { generateThemeToSize } from '../../utils'

export const avatarTokens = {
  size: {
    avatar: {
      ...generateThemeToSize([16, 24, 32, 40, 48])
    }
  },
  fontSize: {
    avatar: {
      text: {
        ...generateThemeToSize([12, 14, 16, 24, 32])
      }
    }
  },
  radii: {
    avatar: {
      circle: '9999px',
      square: '4px'
    }
  },
  borderWidth: {
    avatar: {
      outline: '1px'
    }
  }
}
