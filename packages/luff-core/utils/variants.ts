import { Color } from '~/types'

const colors: Color[] = ['primary', 'danger', 'success', 'warning', 'info']

export function variantColor(color: Color, value = 500) {
  if (colors.includes(color)) {
    return `{color.${color}.${value}}`
  }
  return color
}

export function variantBorderColor(color: Color, value = 500) {
  if (colors.includes(color)) {
    return `1px solid {color.${color}.${value}}`
  }
  return `1px solid ${color}`
}
