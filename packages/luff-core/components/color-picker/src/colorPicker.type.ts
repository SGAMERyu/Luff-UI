import { ExtractPropTypes, PropType } from 'vue'
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

export type colorPickerProps = ExtractPropTypes<typeof colorPickerProps>
export type colorPickerInstance = InstanceType<typeof ColorPicker>
