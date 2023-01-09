import { Color, Size } from '~/types'
import { ExtractPropTypes, PropType } from 'vue'
import Icon from './Icon.vue'
import { cssProp } from 'pinceau/runtime'

export const iconProps = {
  color: {
    type: String as PropType<Color>,
    default: 'white'
  },
  size: {
    type: [String, Number] as PropType<Size>,
    default: 'md'
  },
  css: cssProp
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>
