import { ExtractPropTypes } from 'vue'
import AspectRatio from './AspectRatio.vue'

export const aspectRatioProps = {
  ratio: {
    type: Number
  }
}

export type AspectRatioProps = ExtractPropTypes<typeof aspectRatioProps>
export type AspectRatioInstance = InstanceType<typeof AspectRatio>
