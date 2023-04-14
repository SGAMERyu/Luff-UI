import { ExtractPropTypes } from 'vue'
import Cell from '../../cell/src/Cell.vue'

export const cellProps = {
  as: {
    type: String,
    default: 'div'
  },
  row: {
    type: Number,
    default: 1
  },
  column: {
    type: Number,
    default: 1
  }
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellInstance = InstanceType<typeof Cell>
