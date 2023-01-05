import { Color, Size } from '~/types'
import { ExtractPropTypes, PropType } from 'vue'
import Icon from './icon.vue'

export const iconProps = {
  color: {
    type: String as PropType<Color>,
    default: 'white'
  },
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md'
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>
