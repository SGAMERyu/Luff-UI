import { ExtractPropTypes, PropType } from 'vue'
import AvatarGroup from './AvatarGroup.vue'
import { AvatarProps } from '~/components/avatar/src/avatar.type'
import { Placement } from '@floating-ui/dom'

export type AvatarGroupItemProps = AvatarProps & {
  name: string
}

export const avatarGroupProps = {
  data: {
    type: Array as PropType<Partial<AvatarGroupItemProps>[]>,
    default: () => [],
    validator: (data: unknown) => Array.isArray(data)
  },
  appearance: {
    type: String as PropType<'grid' | 'stack'>,
    default: 'stack'
  },
  maxCount: {
    type: Number,
    default: 5
  },
  borderColor: {
    type: String
  },
  label: {
    type: String
  },
  // todo: dropdown 组件完成后，进行显示
  tooltipPosition: {
    type: String as PropType<Placement>,
    default: 'top'
  },
  isTooltipDisabled: {
    type: Boolean,
    default: false
  }
}

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
