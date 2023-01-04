import { Color } from '~/types'

export interface VariantProps {
  color: Color
  [x: string]: any
}

const colors: Color[] = ['primary', 'danger', 'success', 'warning', 'info']

export function variantColor(props: VariantProps, value = 500) {
  if (colors.includes(props.color)) {
    return `{color.${props.color}.${value}}`
  }
  return props.color
}

export function variantBorderColor(props: VariantProps, value = 500) {
  if (colors.includes(props.color)) {
    return `1px solid {color.${props.color}.${value}}`
  }
  return `1px solid ${props.color}`
}
