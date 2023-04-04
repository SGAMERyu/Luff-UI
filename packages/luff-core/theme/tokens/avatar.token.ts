import { generateThemeToSize } from '../../utils'

export const avatarTokens = {
  size: {
    avatar: {
      ...generateThemeToSize([16, 24, 32, 40, 48]),
      shadowSpread: '2px'
    },
    avatarGroup: '32px'
  },
  fontSize: {
    avatar: {
      text: {
        ...generateThemeToSize([12, 14, 16, 24, 32])
      },
      moreText: '12px'
    }
  },
  space: {
    avatarItem: {
      padding: '4px',
      primaryPadding: '10px'
    },
    avatarGroupGrid: {
      gap: '8px'
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
  },
  opacity: {
    avatar: {
      normal: 0.15,
      strong: 0.3
    }
  }
}
