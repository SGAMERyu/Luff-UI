import { ExtractPropTypes, PropType } from 'vue'
import Link from './Link.vue'

export type LinkVariant = 'hover' | 'underline' | 'text'

export const linkProps = {
  as: {
    type: String,
    default: 'a'
  },
  variant: {
    type: String as PropType<LinkVariant>,
    default: 'hover'
  },
  color: {
    type: String,
    default: 'inherit'
  },
  href: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type LinkProps = ExtractPropTypes<typeof linkProps>
export type LinkInstance =  InstanceType<typeof Link>
  