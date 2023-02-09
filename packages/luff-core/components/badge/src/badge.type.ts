import { PropType, ExtractPropTypes, Component } from 'vue'
import { Color } from '~/types'
import Badge from './Badge.vue'

export type BadgePlacement = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

export const badgeProps = {
  content: {
    type: [String, Number] as PropType<string | Component | number>
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  placement: {
    type: String as PropType<BadgePlacement>,
    require: true,
    default: 'top-right'
  },
  size: {
    type: String as PropType<'default' | 'sm'>,
    default: 'default'
  },
  dot: {
    type: Boolean,
    default: false
  }
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
export type BadgeInstance = InstanceType<typeof Badge>
