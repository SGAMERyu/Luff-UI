import { BadgePlacement } from '~/badge'
import { generateThemeToSize } from '../../utils'

export const badgeTokens = {
  size: {
    badge: {
      ...generateThemeToSize([4, 12, 24, 32, 40])
    },
    badgeSpace: {
      ...generateThemeToSize([6, 8, 10, 12, 16])
    }
  }
}

export const badgeUtils = {
  badgeSpace: (value: string) => ({
    paddingLeft: `{size.badgeSpace.${value}}`,
    paddingRight: `{size.badgeSpace.${value}}`
  }),
  badgePlacement: (value: BadgePlacement) => {
    const placementProperty = {
      transform: 'scale(1) translate(50%, 50%)',
      transformOrigin: '100% 100%'
    }
    if (value === 'bottom-left') {
      return { ...placementProperty, bottom: '5%', left: '5%' }
    } else if (value === 'bottom-right') {
      return { ...placementProperty, bottom: '5%', right: '5%' }
    } else if (value === 'top-left') {
      return { ...placementProperty, top: '5%', left: '5%' }
    } else if (value === 'top-right') {
      return { ...placementProperty, top: '5%', right: '5%' }
    }
  }
}
