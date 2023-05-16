import { ExtractPropTypes, PropType } from 'vue'
import Overlay from './Overlay.vue'

export type OverlayVariant = 'color' | 'image'

export const overlayProps = {
  variant: {
    type: String as PropType<OverlayVariant>,
    default: 'color'
  },
  fixed: {
    type: Boolean,
    default: false
  },
  blur: {
    type: [String, Number],
    default: 0
  },
  center: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#000'
  },
  opacity: {
    type: Number,
    default: 0.5
  },
  zIndex: {
    type: [String, Number],
    default: 200
  },
  image: {
    type: String
  }
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
export type OverlayInstance = InstanceType<typeof Overlay>
