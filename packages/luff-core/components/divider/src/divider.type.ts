import { ExtractPropTypes, PropType, Component } from 'vue'
import Divider from './Divider.vue'
import { Color } from '~/types'

export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerLabelPosition = 'left' | 'center' | 'right'

export const dividerProps = {
  color: {
    type: String as PropType<Color>,
    default: '#00000'
  },
  variant: {
    type: String as PropType<DividerVariant>,
    default: 'solid'
  },
  orientation: {
    type: String as PropType<DividerOrientation>,
    default: 'vertical'
  },
  orientationMargin: {
    type: String,
    default: '24px'
  },
  label: {
    type: [Object, String] as PropType<string | Component>,
  },
  labelPosition: {
    type: String as PropType<DividerLabelPosition>,
    default: 'center'
  },
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
export type DividerInstance =  InstanceType<typeof Divider>
  