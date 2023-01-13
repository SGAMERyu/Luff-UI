import { LuffButton } from '~/button'
import { LuffBalancer } from '~/balancer'
import { LuffAlert } from '~/alert'
import { LuffIcon } from '~/icon'
import { LuffAvatar } from '~/avatar'
import { LuBadge } from '~/badge'
import { LuffChip } from '~/chip'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [LuffButton, LuffBalancer, LuffAlert, LuffIcon, LuffAvatar, LuBadge, LuffChip]

const installPieceUi = createInstaller(components)

export default installPieceUi

export * from './theme/light-theme'
