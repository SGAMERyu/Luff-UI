import { ExtractPropTypes, PropType } from 'vue'

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
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
