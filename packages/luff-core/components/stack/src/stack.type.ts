import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import Stack from './Stack.vue'

export const stackProps = {
  as: {
    type: String,
    default: 'div'
  },
  height: {
    type: String,
    default: '100%'
  },
  gap: {
    type: String,
    default: '8px'
  },
  align: {
    type: String as PropType<CSSProperties['alignItems']>,
    default: 'stretch'
  },
  justify: {
    type: String as PropType<CSSProperties['justifyContent']>,
    default: 'center'
  }
}

export type StackProps = ExtractPropTypes<typeof stackProps>
export type StackInstance =  InstanceType<typeof Stack>
  