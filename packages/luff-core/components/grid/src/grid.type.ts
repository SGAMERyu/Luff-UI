import { ExtractPropTypes, PropType } from 'vue'
import Grid from './Grid.vue'

export const gridProps = {
  as: {
    type: String,
    default: 'div'
  },
  gap: {
    type: [String, Array] as PropType<string | string[]>,
    default: '0px'
  },
  rows: {
    type: String
  },
  columns: {
    type: [String, Number] as PropType<string | number>,
    default: 24
  },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>
  },
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'>
  }
}

export type GridProps = ExtractPropTypes<typeof gridProps>
export type GridInstance = InstanceType<typeof Grid>

