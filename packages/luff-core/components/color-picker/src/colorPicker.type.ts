import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import ColorPicker from './ColorPicker.vue'

export type ColorPickerFormat = 'hex' | 'hexa' | 'rgba' | 'rgb' | 'hsl' | 'hsla'

export const colorPickerProps = {
  format: {
    type: String as PropType<ColorPickerFormat>,
    default: 'hex'
  },
  swatches: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  modelValue: {
    type: String,
    default: '#ffffff'
  }
}

export const colorSliderProps = {
  rootStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  gradientStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  maxValue: {
    type: Number,
    default: 100
  },
  handleColor: {
    type: String,
    default: 'transparent'
  },
  modelValue: {
    type: Number,
    required: true
  },
  round: {
    type: Boolean,
    default: true
  }
}

export const colorSaturationProps = {
  saturationStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  saturation: {
    type: Number
  },
  value: {
    type: Number
  }
}

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
export type ColorPickerInstance = InstanceType<typeof ColorPicker>
export type ColorSliderProps = ExtractPropTypes<typeof colorSliderProps>
