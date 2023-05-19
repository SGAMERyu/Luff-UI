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
  }
}

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
export type ColorPickerInstance = InstanceType<typeof ColorPicker>
export type ColorSliderProps = ExtractPropTypes<typeof colorSliderProps>
