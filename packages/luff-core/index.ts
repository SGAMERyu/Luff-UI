import { LuffButton } from '~/button'
import { LuffBalancer } from '~/balancer'
import { LuffAlert } from '~/alert'
import { LuffIcon } from '~/icon'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [LuffButton, LuffBalancer, LuffAlert, LuffIcon]

const installPieceUi = createInstaller(components)

export default installPieceUi
