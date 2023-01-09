import { generateThemeToSize } from '../../utils'

export const alertTokens = {
  size: {
    alertSpace: '8px',
    alertRound: {
      ...generateThemeToSize([2, 4, 8, 12, 16]),
    }
  }
}
