<template>
  <component :is="as" ref="wrapperRef" class="lu-balancer">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { balancerProps } from './balancer.type'
import { useResizeObserver } from '@vueuse/core'

defineOptions({
  name: 'LuBalancer'
})

const props = defineProps(balancerProps)
const wrapperRef = ref<HTMLElement>()

function reLayout(ratio: number, wrapper: HTMLElement) {
  const container = wrapper.parentElement as HTMLElement

  const update = (width: number) => (wrapper.style.maxWidth = width + 'px')

  wrapper.style.maxWidth = ''

  const wrapperWidth = container.clientWidth
  const wrapperHeight = container.clientHeight

  let l = wrapperWidth / 2
  let r = wrapperWidth
  let maxWidth

  if (wrapperWidth) {
    while (l + 1 < r) {
      maxWidth = ~~((l + r) / 2)
      update(maxWidth)
      container.clientHeight === wrapperHeight ? (r = maxWidth) : (l = maxWidth)
    }
    update(r * ratio + wrapperWidth * (1 - ratio))
  }
}

onMounted(() => {
  const container = wrapperRef.value?.parentElement as HTMLElement
  if (!container) return
  useResizeObserver(container, () => {
    reLayout(props.ratio, wrapperRef.value as HTMLElement)
  })
})
</script>

<style lang="ts">
css({
  '.lu-balancer': {
    display: 'inline-block',
    verticalAlign: 'top',
    textDecoration: 'inherit',
  }
})
</style>
