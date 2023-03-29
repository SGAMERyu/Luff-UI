import { Component, ExtractPropTypes, PropType } from 'vue'
import type { Placement } from '@floating-ui/dom'
import Tooltip from './Tooltip.vue'

export const tooltipProps = {
  as: {
    type: String,
    default: 'div'
  },
  content: {
    type: [Object, String] as PropType<string | Component>,
    required: true
  },
  placement: {
    type: String as PropType<Placement>,
    required: true,
    default: 'top'
  },
  padding: {
    type: Number,
    default: 12
  },
  offset: {
    type: Number,
    default: 6
  }
}

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
export type TooltipInstance = InstanceType<typeof Tooltip>
