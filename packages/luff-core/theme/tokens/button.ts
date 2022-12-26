import { ButtonColor } from '~/button'
import { generateThemeToSize } from '../../utils'

const buttonColors: (ButtonColor | string)[] = ['primary', 'danger', 'success', 'warning']

export const buttonTokens = {
  size: {
    btn: {
      ...generateThemeToSize([24, 28, 32, 36, 40])
    },
    btnPadding: {
      ...generateThemeToSize([10, 12, 16, 20, 24])
    }
  }
}

export const buttonUtils = {
  bf: (value: string) => ({
    background: buttonColors.includes(value) ? `{color.${value}.400}` : value,
    color: '{color.white}'
  })
}
