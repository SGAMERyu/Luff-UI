import { ExtractPropTypes, CSSProperties, PropType } from 'vue'
import Flex from './Flex.vue'

export const flexProps = {
  as: {
    type: String,
    default: 'div'
  },
  align: {
    type: String as PropType<CSSProperties['alignItems']>,
    default: 'start'
  },
  justify: {
    type: String as PropType<CSSProperties['justifyContent']>
  },
  gap: {
    type: String as PropType<CSSProperties['gap']>,
    default: '0px',
  },
  direction: {
    type: String as PropType<CSSProperties['flexDirection']>,
    default: 'row'
  },
  wrap: {
    type: String as PropType<CSSProperties['flexWrap']>,
    default: 'nowrap'
  }
}

export type FlexProps = ExtractPropTypes<typeof flexProps>
export type FlexInstance =  InstanceType<typeof Flex>
  