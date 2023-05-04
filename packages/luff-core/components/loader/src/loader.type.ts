import { ExtractPropTypes, PropType } from 'vue'
import Loader from './Loader.vue'
import { Size } from '~/types'

export const loaderProps = {
  color: {
    type: String,
    default: '#3277FF'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  }
}

export type LoaderProps = ExtractPropTypes<typeof loaderProps>
export type LoaderInstance =  InstanceType<typeof Loader>
  