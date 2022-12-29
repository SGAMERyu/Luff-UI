import { generateThemeToSize } from '../../utils'

export const buttonTokens = {
  size: {
    btn: {
      ...generateThemeToSize([24, 32, 40, 48, 56])
    },
    btnSpace: {
      ...generateThemeToSize([6, 14, 24, 32, 40])
    },
    btnCompactSpace: {
      ...generateThemeToSize([6, 8, 10, 12, 14])
    }
  }
}

export const buttonUtils = {
  btnSize: (value: string) => ({
    height: `{size.btn.${value}}`,
    paddingLeft: `{size.btnSpace.${value}}`,
    paddingRight: `{size.btnSpace.${value}}`
  })
}
