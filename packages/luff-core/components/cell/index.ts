import { withInstall } from '~/utils'
import Cell from '../cell/src/Cell.vue'

export const LuCell = withInstall(Cell)
export default LuCell

export * from './src/cell.type'