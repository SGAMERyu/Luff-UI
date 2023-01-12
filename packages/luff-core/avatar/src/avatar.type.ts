import { ExtractPropTypes, PropType } from 'vue'
import { Color, Variant, Size } from '~/types'
import Avatar from './Avatar.vue'

export type AvatarVariant = Variant | 'gradient'

export const avatarProps = {
  src: {
    type: String
  },
  alt: {
    type: String
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  variant: {
    type: String as PropType<AvatarVariant>,
    default: 'light'
  },
  size: {
    type: String as PropType<Size>,
    default: "sm"
  },
  radius: {
    type: String as PropType<Size>,
    default: 'sm'
  }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>

