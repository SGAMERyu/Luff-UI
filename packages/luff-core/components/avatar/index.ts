import { withInstall } from '~/utils'
import Avatar from './src/Avatar.vue'
import AvatarItem from './src/AvatarItem.vue'
import AvatarSkeleton from './src/AvatarSkeleton.vue'

export const LuffAvatar = withInstall(Avatar)
export const LuffAvatarItem = withInstall(AvatarItem)
export const LuAvatarSkeleton = withInstall(AvatarSkeleton)
export default LuffAvatar

export * from './src/avatar.type'
