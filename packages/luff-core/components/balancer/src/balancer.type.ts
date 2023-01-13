import { ExtractPropTypes } from 'vue'
import Balancer from './Balancer.vue'

export const balancerProps = {
  as: {
    type: String,
    default: 'span'
  },
  ratio: {
    type: Number,
    default: 1
  }
}

export type BalancerProps = ExtractPropTypes<typeof balancerProps>
export type BalancerInstance = InstanceType<typeof Balancer>
