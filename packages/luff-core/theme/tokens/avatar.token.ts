import { generateThemeToSize } from '../../utils'

export const avatarTokens = {
  size: {
    avatar: {
      ...generateThemeToSize([16, 24, 32, 40, 48])
    },
    avatarRound: {
      ...generateThemeToSize([2, 4, 8, 16, 32])
    }
  },
  fontSize: {
    avatarText: {
      ...generateThemeToSize([12, 14, 16, 24, 32])
    }
  }
}

export const avatarUtils = {
  avatarSize: (value: string) => ({
    width: `{size.avatar.${value}}`,
    height: `{size.avatar.${value}}`,
    fontSize: `{fontSize.avatarText.${value}}`
  })
}
