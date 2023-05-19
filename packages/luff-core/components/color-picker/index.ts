import { withInstall } from '~/utils'
import ColorPicker from './src/ColorPicker.vue'
import HueSlider from './src/HueSlider.vue'
import AlphaSlider from './src/AlphaSlider.vue'

export const LuColorPicker = withInstall(ColorPicker)
export const LuHueSlider = withInstall(HueSlider)
export const LuAlphaSlider = withInstall(AlphaSlider)
export default LuColorPicker

export * from './src/colorPicker.type'
