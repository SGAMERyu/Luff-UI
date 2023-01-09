import { ExtractPropTypes, PropType, Component } from 'vue'
import Alert from './Alert.vue'
import { Color, Variant, Size } from '~/types'

export type AlertVariant = Variant

export const alertProps = {
  title: {
    type: String
  },
  description: {
    type: String
  },
  variant: {
    type: String as PropType<AlertVariant>,
    default: 'filled'
  },
  color: {
    type: String as PropType<Color | string>,
    default: 'primary'
  },
  icon: {
    type: Object as PropType<Component>
  },
  radius: {
    type: String as PropType<Size>,
    default: 'sm'
  },
  showClose: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: true
  }
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertInstance = InstanceType<typeof Alert>
