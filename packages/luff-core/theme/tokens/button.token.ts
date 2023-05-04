import { generateThemeToSize } from '../../utils'

export const buttonTokens = {
  size: {
    btn: {
      ...generateThemeToSize([28, 32, 40, 48, 56])
    },
  },
  fontSize: {
    btn: {
      ...generateThemeToSize([12, 14, 16, 18, 20])
    }
  },
  space: {
    btn: {
      ...generateThemeToSize([8, 16, 24, 32, 40]),
      leftIcon: '8px',
      rightIcon: '8px'
    }
  },
  radii: {
    btn: {
      ...generateThemeToSize([2, 4, 8, 16, 32])
    }
  }
}

export const buttonUtils = {
  btnSize: (value: string) => ({
    height: `{size.btn.${value}}`,
    paddingLeft: `{size.btnSpace.${value}}`,
    paddingRight: `{size.btnSpace.${value}}`,
    fontSize: `{fontSize.btnText.${value}}`
  })
}
