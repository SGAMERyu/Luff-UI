import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import Group from './Group.vue'

export const groupProps = {
  as: {
    type: String,
    default: 'div',
  },
  align: {
    type: String as PropType<CSSProperties['alignItems']>,
    default: 'center'
  },
  noWrap: {
    type: Boolean,
    default: true,
  },
  gap: {
    type: String,
    default: '8px'
  },
  justify: {
    type: String as PropType<CSSProperties['justifyContent']>,
    default: 'start'
  }
}

export type GroupProps = ExtractPropTypes<typeof groupProps>
export type GroupInstance =  InstanceType<typeof Group>
  