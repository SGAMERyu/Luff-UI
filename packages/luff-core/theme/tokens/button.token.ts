import { generateThemeToSize } from '../../utils'

export const buttonTokens = {
  size: {
    btn: {
      ...generateThemeToSize([28, 32, 40, 48, 56])
    },
    btnSpace: {
      ...generateThemeToSize([8, 16, 24, 32, 40])
    },
    btnRound: {
      ...generateThemeToSize([2, 4, 8, 16, 32])
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
