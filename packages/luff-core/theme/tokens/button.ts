import { generateThemeToSize } from '../../utils'

export const buttonTokens = {
  size: {
    btn: {
      ...generateThemeToSize([24, 32, 40, 48, 56])
    },
    btnPadding: {
      ...generateThemeToSize([6, 14, 24, 32, 40])
    }
  }
}

export const buttonUtils = {
  bSize: (value: string) => ({
    height: `{size.btn.${value}}`,
    paddingLeft: `{size.btnPadding.${value}}`,
    paddingRight: `{size.btnPadding.${value}}`
  })
}
