import { PropType, ExtractPropTypes, Component } from 'vue'
import { Color, Size } from '~/types'
import Badge from './Badge.vue'

export type BadgePlacement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

export const badgeProps = {
  content: {
    type: String as PropType<string | Component>
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  placement: {
    type: String as PropType<BadgePlacement>,
    default: 'top-right'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  dot: {
    type: Boolean,
    default: false
  }
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
export type BadgeInstance = InstanceType<typeof Badge>
