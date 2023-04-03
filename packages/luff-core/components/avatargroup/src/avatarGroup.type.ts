import { ExtractPropTypes, PropType } from 'vue'
import AvatarGroup from './AvatarGroup.vue'
import { AvatarProps } from '~/components/avatar/src/avatar.type'
import { Size } from '~/types'
import { Placement } from '@floating-ui/dom'

export const avatarGroupProps = {
  data: {
    type: Array as PropType<AvatarProps[]>,
    default: () => []
  },
  appearance: {
    type: String as PropType<'grid' | 'stack'>
  },
  maxCount: {
    type: Number,
    default: 5
  },
  size: {
    type: Number as PropType<Size>,
    default: 'md'
  },
  borderColor: {
    type: String
  },
  label: {
    type: String
  },
  tooltipPosition: {
    type: String as PropType<Placement>,
    required: true,
    default: 'top'
  },
  isTooltipDisabled: {
    type: Boolean,
    default: false
  }
}

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
