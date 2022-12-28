import { ExtractPropTypes, PropType, Component } from 'vue'
import Alert from './Alert.vue'
import { Variant } from '~/types'

export type AlertVariant = Variant

export const alertProps = {
  title: {
    type: String
  },
  description: {
    type: String
  },
  variant: {
    type: String as PropType<AlertVariant>
  },
  icon: {
    type: Object as PropType<Component>
  }
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertInstance = InstanceType<typeof Alert>
