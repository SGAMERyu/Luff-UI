import { generateThemeToSize } from '../../utils'

export const badgeTokens = {
  size: {
    badge: {
      ...generateThemeToSize([4, 12, 24, 32, 40]),
      dotSize: '8px'
    },
    badgeSize: {
      default: '20px',
      sm: '12px'
    }
  },
  radii: {
    badge: '50%'
  }
}

export const badgeUtils = {
  badgeSize: (value: string) => ({
    minWidth: `{size.badgeSize.${value}}`,
    height: `{size.badgeSize.${value}}`
  }),
}
