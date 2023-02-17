import { LuffButton, LuffBalancer, LuffAlert, LuffIcon, LuffAvatar, LuBadge, LuffChip, LuffBreadCrumbs, LuffBreadCrumbsItem } from '~/components'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [LuffButton, LuffBalancer, LuffAlert, LuffIcon, LuffAvatar, LuBadge, LuffChip, LuffBreadCrumbs, LuffBreadCrumbsItem]

const installPieceUi = createInstaller(components)

export default installPieceUi

export * from './theme/light-theme'
