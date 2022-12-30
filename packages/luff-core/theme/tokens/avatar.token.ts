import { generateThemeToSize } from '../../utils'

export const avatarTokens = {
  size: {
    avatar: {
      ...generateThemeToSize([16, 24, 32, 40, 48])
    }
  }
}

export const avatarUtils = {
  avatarSize: (value: string) => ({
    width: `{size.avatar.${value}}`,
    height: `{size.avatar.${value}}`
  })
}
