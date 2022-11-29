import { LuffButton } from '~/button'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [LuffButton]

const installPieceUi = createInstaller(components)

export default installPieceUi
