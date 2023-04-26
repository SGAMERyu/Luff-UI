import { Color, Size, Gradient } from '~/types'

const colors: Color[] = ['primary', 'danger', 'success', 'warning', 'info']
const sizes: (Size | string)[] = ['xs' , 'sm' , 'md' , 'lg' , 'xl']

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

export function getSize(size: Size | string) {
  if (sizes.includes(size)) {
    return `{fontSize.${size}}`
  }
  return size
}

export function getGradient(gradient: Gradient) {
  if (typeof gradient !== 'object' && gradient !== null) return
  return `linear-gradient(${gradient.deg}, ${gradient.from} 0%, ${gradient.to} 100%)`;
}
