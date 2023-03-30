import { withInstall } from '~/utils'
import Avatar from './src/Avatar.vue'
import AvatarItem from './src/AvatarItem.vue'

export const LuffAvatar = withInstall(Avatar)
export const LuffAvatarItem = withInstall(AvatarItem)
export default LuffAvatar

export * from './src/avatar.type'
