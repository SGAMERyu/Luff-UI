import { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import { cssProp } from 'pinceau/runtime'
import Image from './Image.vue'

export const imageProps = {
  src: {
    type: String
  },
  alt: {
    type: String,
  },
  caption: {
    type: String,
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
  
export type ImageProps = ExtractPropTypes<typeof imageProps>
export type ImageInstance =  InstanceType<typeof Image>
  