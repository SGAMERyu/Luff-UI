import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import { cssProp } from 'pinceau/runtime'
import Image from './Image.vue'

export const imageProps = {
  preview: {
    type: Boolean,
    default: false
  },
  src: {
    type: String
  },
  alt: {
    type: String
  },
  caption: {
    type: String
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  fit: {
    type: String as PropType<CSSProperties['objectFit']>,
    default: 'cover'
  },
  cssProp: cssProp,
  showLoader: {
    type: Boolean,
    default: false
  }
}

export const imageViewerProps = {
  src: {
    type: String
  }
}

export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>
export type ImageProps = ExtractPropTypes<typeof imageProps>
export type ImageInstance = InstanceType<typeof Image>

export interface NatureSize {
  width: string
  height: string
}

export enum ToolActionEnum {
  ZOOM_IN = 'zoomIn',
  ZOOM_OUT = 'zoomOut',
  TURN_LEFT = 'turnLeft',
  TURN_RIGHT = 'turnRight',
  FULL_SCREEN = 'fullScreen',
  RESET = 'reset'
}
