import { PropType, ExtractPropTypes } from 'vue'
import { Color, Variant } from '~/types'
import Badge from './Badge.vue'

export type BadgePlacements = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export const badgeProps = {
  as: {
    type: String,
    default: 'div'
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary'
  },
  max: {
    type: [Number, Boolean] as PropType<boolean | number>,
    default: false
  },
  variants: {
    type: String as PropType<Variant>
  },
  count: {
    type: Number,
    require: true
  },
  dot: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<BadgePlacements>,
    default: 'top-right'
  },
  borderWeight: {
    type: Number,
    default: 1
  }
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
export type BadgeInstance = InstanceType<typeof Badge>
