import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import Heading from './Heading.vue'
import { Color } from '~/types'

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export const headingProps = {
  level: {
    type: String as PropType<HeadingLevel>,
    default: '1'
  },
  align: {
    type: String as PropType<CSSProperties['textAlign']>,
    default: 'left'
  },
  color: {
    type: String as PropType<Color>,
    default: '#000'
  },
  italic: {
    type: Boolean,
    default: false
  },
  weight: {
    type: [Number, String],
    default: 500,
  },
  truncate: {
    type: Boolean,
    default: false
  },
  size: {
    type: String
  }
}

export type HeadingProps = ExtractPropTypes<typeof headingProps>
export type HeadingInstance =  InstanceType<typeof Heading>
  