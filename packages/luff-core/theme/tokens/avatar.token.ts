import { generateThemeToSize } from '../../utils'

export const avatarTokens = {
  size: {
    avatar: {
      ...generateThemeToSize([16, 24, 32, 40, 48]),
      shadowSpread: '2px'
    }
  },
  fontSize: {
    avatar: {
      text: {
        ...generateThemeToSize([12, 14, 16, 24, 32])
      }
    }
  },
  space: {
    avatarItem: {
      padding: '4px',
      primaryPadding: '10px'
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
