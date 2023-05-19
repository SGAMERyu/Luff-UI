import {
  LuffButton,
  LuffBalancer,
  LuffAlert,
  LuffIcon,
  LuffAvatar,
  LuBadge,
  LuffChip,
  LuffBreadCrumbs,
  LuffBreadCrumbsItem,
  LuTooltip,
  LuffAvatarItem,
  LuAvatarSkeleton,
  LuAvatarGroup,
  LuOverlay,
  LuAspectRatio,
  LuGrid,
  LuCell,
  LuFlex,
  LuGroup,
  LuStack,
  LuDivider,
  LuHeading,
  LuMark,
  LuText,
  LuLink,
  LuHighlight,
  LuImage,
  LuColorPicker
} from '~/components'
import { createInstaller } from './utils'
import type { Plugin } from 'vue'

import 'pinceau.css'

const components: Plugin[] = [
  LuffButton,
  LuffBalancer,
  LuffAlert,
  LuffIcon,
  LuffAvatar,
  LuBadge,
  LuffChip,
  LuffBreadCrumbs,
  LuffBreadCrumbsItem,
  LuTooltip,
  LuffAvatarItem,
  LuAvatarSkeleton,
  LuAvatarGroup,
  LuOverlay,
  LuAspectRatio,
  LuGrid,
  LuCell,
  LuFlex,
  LuGroup,
  LuStack,
  LuDivider,
  LuHeading,
  LuMark,
  LuText,
  LuLink,
  LuHighlight,
  LuImage,
  LuColorPicker
]

const installPieceUi = createInstaller(components)

export default installPieceUi
