import { ExtractPropTypes, PropType, Component } from 'vue'
import { Size, Variant, Color } from '~/types'
import Chip from './Chip.vue'

export type ChipVariant = 'light' | 'outline'

export const chipProps = {
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  radius: {
    type: String as PropType<Size>,
    default: 'md'
  },
  variants: {
    type: String as PropType<ChipVariant>,
    default: 'light'
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  checked: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: Object as PropType<Component>,
    require: false
  },
  appendIcon: {
    type: Object as PropType<Component>,
    require: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type ChipProps = ExtractPropTypes<typeof chipProps>
export type ChipInstance = InstanceType<typeof Chip>
