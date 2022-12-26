import { ButtonColor, ButtonProps } from './button.type'

const buttonColors: (ButtonColor | string)[] = ['primary', 'danger', 'success', 'warning']

export function computedBtnColor(props: ButtonProps, value = 400) {
  if (buttonColors.includes(props.color)) {
    return `{color.${props.color}.${value}}`
  }
  return props.color
}

export function computedBtnBorder(props: ButtonProps, value = 400) {
  if (buttonColors.includes(props.color)) {
    return `1px solid {color.${props.color}.${value}}`
  }
  return `1px solid ${props.color}`
}
