import { Component, ExtractPropTypes, PropType } from 'vue'
import { Color, Variant, Size } from '~/types'
import Avatar from './Avatar.vue'

export type AvatarVariant = Variant | 'default'
export type AvatarTarget = '_blank' | '_self' | '_top' | '_parent'

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
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<AvatarTarget>
  },
  alt: {
    type: String,
    default: ''
  },
  src: {
    type: String
  },
  disabled: {
    type: Boolean
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

export const avatarItemProps = {
  as: {
    type: String,
    default: 'span'
  },
  avatar: {
    type: [String, Object] as PropType<string | Component>
  },
  label: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String
  },
  href: {
    type: String
  },
  target: {
    type: String as PropType<AvatarTarget>
  },
  disabled: {
    type: Boolean
  },
  primaryText: {
    type: [String, Object] as PropType<string | Component>
  },
  secondaryText: {
    type: [String, Object] as PropType<string | Component>
  },
  isTruncationDisabled: {
    type: Boolean,
    default: true
  }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>
export type AvatarItem = ExtractPropTypes<typeof avatarItemProps>
export type AvatarItemInstance = InstanceType<typeof Avatar>
