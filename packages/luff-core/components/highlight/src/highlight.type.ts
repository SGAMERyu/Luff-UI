import { ExtractPropTypes, PropType } from 'vue'
import Highlight from './Highlight.vue'

export type HightVariant = 'background' | 'border' | 'underline'
  
export const highlightProps = {
  as: {
    type: String,
    default: 'p'
  },
  variant: {
    type: String as PropType<HightVariant>,
    default: 'background'
  },
  content: {
    type: String,
    require: true
  },
  highlight: {
    type: Array as PropType<string[]>,
    default: () => ([])
  },
  highlightColor: {
    type: String,
    default: '{color.yellow.500}'
  },
  highlightStyle: {
    type: Object,
    default: () => ({})
  },
  ignoreCase: {
    type: Boolean,
    default: false
  }
}

export type HighlightProps = ExtractPropTypes<typeof highlightProps>
export type HighlightInstance =  InstanceType<typeof Highlight>
  