import { ExtractPropTypes, PropType } from 'vue'
import { Size } from '~/types'

export type ButtonVariant = 'outline' | 'white' | 'light' | 'default' | 'filled' | 'subtle' | 'gradient'
export type ButtonColor = 'primary' | 'danger' | 'success' | 'warning'

export const buttonProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  color: {
    type: String as PropType<ButtonColor | string>,
    default: 'primary'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
