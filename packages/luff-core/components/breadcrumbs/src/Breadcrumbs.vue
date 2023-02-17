<template>
  <nav class="lu-breadcrumbs">
    <ol>
      <slot></slot>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { breadcrumbsInjectionKey, breadcrumbsProps } from './breadcrumbs.type'

defineOptions({
  name: 'LuBreadcrumbs'
})

const props = defineProps(breadcrumbsProps)
const itemsCount = ref(0)
const overFlowIndexInterval = ref<never[] | number[]>([])

watch([itemsCount, () => props.visibleItems], ([count, visibleItemsCount]) => {
  if (visibleItemsCount > 1 && visibleItemsCount < count) {
    return (overFlowIndexInterval.value = [1, count - visibleItemsCount])
  }
  return (overFlowIndexInterval.value = [-1, -1])
})

function trackItems() {
  return itemsCount.value++
}

function expandAllItems() {
  overFlowIndexInterval.value = [-1, -1]
}

provide(breadcrumbsInjectionKey, {
  separator: toRef(props, 'separator'),
  overFlowIndexInterval,
  trackItems,
  expandAllItems
})
</script>

<style lang="ts">
css({
  '.lu-breadcrumbs': {
    '& > ol': {
      padding: '0px',
      display: 'flex',
      alignItems: 'center'
    }
  }
})
</style>
