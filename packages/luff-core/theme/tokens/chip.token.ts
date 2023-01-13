import { generateThemeToSize } from '../../utils'

export const chipTokens = {
  size: {
    chip: {
      ...generateThemeToSize([16, 24, 32, 40, 48])
    }
  },
  radii: {
    chip: {
      ...generateThemeToSize([2, 4, 8, 16, 32])
    }
  },
  space: {
    chip: {
      ...generateThemeToSize([8, 12, 16, 20, 24])
    }
  }
}
