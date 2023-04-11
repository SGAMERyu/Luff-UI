import { ExtractPropTypes } from 'vue'
import Cell from '../../cell/src/Cell.vue'

export const cellProps = {
  as: {
    type: String,
    default: 'div'
  }
}

export type CellProps = ExtractPropTypes<typeof cellProps>
export type CellInstance = InstanceType<typeof Cell>
