import { ExtractPropTypes, PropType } from 'vue'
import Mark from './Mark.vue'
import { Color } from '~/types'

export type MarkVariant = 'background' | 'border' | 'underline'

export const markProps = {
  as: {
    type: String,
    default: 'span' 
  },
  color: {
    type: String as PropType<Color>,
    default: '{color.yellow.500}'
  },
  variant: {
    type: String as PropType<MarkVariant>,
    default: 'background',
  },
  markStyle: {
    type: Object,
    default: () => ({})
  }
}

export type MarkProps = ExtractPropTypes<typeof markProps>
export type MarkInstance =  InstanceType<typeof Mark>
  