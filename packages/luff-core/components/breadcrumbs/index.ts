import { withInstall } from '~/utils'
import Breadcrumbs  from './src/Breadcrumbs.vue'
import BreadcrumbsItem from './src/BreadcrumbsItem.vue'

export const LuffBreadCrumbs = withInstall(Breadcrumbs)
export const LuffBreadCrumbsItem = withInstall(BreadcrumbsItem)
export default LuffBreadCrumbs

export * from './src/breadcrumbs.type'