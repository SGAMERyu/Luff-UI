import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import { Size, Gradient } from '~/types'
import Text from './Text.vue'

export type TextVariant = 'text' | 'gradient'
export type TextSize = Size | CSSProperties['fontSize']

export const textProps = {
  as: {
    type: String,
    default: 'p',
  },
  variant: {
    type: String as PropType<TextVariant>,
    default: 'text'
  },
  color: {
    type: String,
    default: '{color.gray.900}'
  },
  gradient: {
    type: Object as PropType<Gradient>,
    validator: (value) => {
      return Reflect.has(value, 'from') && Reflect.has(value, 'to') && Reflect.has(value, 'deg')
    }
  },
  size: {
    type: String as PropType<TextSize>,
    default: 'md'
  },
  weight: {
    type: String as PropType<CSSProperties['fontWeight']>,
    default: 'normal'
  },
  align: {
    type: String as PropType<CSSProperties['textAlign']>,
    default: 'left'
  },
  truncate: {
    type: Boolean,
    default: false,
  },
  italic: {
    type: Boolean,
    default: false
  }
}

export type TextProps = ExtractPropTypes<typeof textProps>
export type TextInstance =  InstanceType<typeof Text>
  