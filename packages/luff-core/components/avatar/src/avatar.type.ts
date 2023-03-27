import { ExtractPropTypes, PropType, Component } from 'vue'
import { Color, Variant, Size } from '~/types'
import Avatar from './Avatar.vue'

export type AvatarVariant = Variant | 'default'

export const avatarProps = {
  as: {
    type: String,
    default: 'div'
  },
  appearance: {
    type: String as PropType<'circle' | 'square'>,
    default: 'circle'
  },
  label: {
    type: String
  },
  borderColor: {
    type: String
  },
  text: {
    type: String
  },
  textColor: {
    type: String
  },
  alt: {
    type: String
  },
  src: {
    type: String
  },
  presence: {
    type: [Object, String] as PropType<Component | string>
  },
  status: {
    type: [Object, String] as PropType<Component | string>
  },
  disabled: {
    type: Boolean
  },
  tabIndex: {
    type: Number
  },
  stackIndex: {
    type: Number
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  variant: {
    type: String as PropType<AvatarVariant>,
    default: 'default'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>
