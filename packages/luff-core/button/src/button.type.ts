import { ExtractPropTypes, PropType } from 'vue'
import { Size, Color, Variant } from '~/types'

export type ButtonVariant = Variant  | 'white' | 'default' | 'subtle' | 'gradient'

export const buttonProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  color: {
    type: String as PropType<Color | string>,
    default: 'primary'
  },
  size: {
    type: String as PropType<Size>,
    default: 'sm'
  },
  radius: {
    type: String as PropType<Size>,
    default: 'sm'
  },
  loading: {
    type: Boolean,
    default: false,
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
