import { LuffButton } from '~/button'
import { LuffBalancer } from '~/balancer'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [LuffButton, LuffBalancer]

const installPieceUi = createInstaller(components)

export default installPieceUi
