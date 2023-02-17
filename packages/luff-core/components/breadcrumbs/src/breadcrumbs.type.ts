import { PropType, Component, ExtractPropTypes, InjectionKey } from 'vue'
import { LuArrowRightSLine } from '@luff-ui/icon'
import type { RouteLocationRaw } from 'vue-router'
import { cssProp } from 'pinceau/runtime'
import { MayBeRef } from '~/types'

export const breadcrumbsProps = {
  separator: {
    type: [String, Object] as PropType<string | Component>,
    default: () => LuArrowRightSLine
  },
  visibleItems: {
    type: Number as PropType<number>,
    default: 0
  },
  cssProp
}

export const breadcrumbsItemProps = {
  icon: {
    type: [String, Object] as PropType<string | Component>,
    default: ''
  },
  separator: {
    type: [String, Object] as PropType<string | Component>
  },
  href: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    default: ''
  },
  replace: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  cssProp
}

interface BreadcrumbInjectionProps {
  separator: string | Component
  overFlowIndexInterval: MayBeRef<number[]>
  trackItems: () => number
  expandAllItems: () => void
}

export type BreadcrumbsProps = ExtractPropTypes<typeof breadcrumbsProps>
export type BreadcrumbsItemProps = ExtractPropTypes<typeof breadcrumbsItemProps>

export const breadcrumbsInjectionKey: InjectionKey<BreadcrumbInjectionProps> = Symbol('lu-breadcrumbs')
