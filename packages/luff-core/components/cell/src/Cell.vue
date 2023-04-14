<template>
  <component :is="as" class="lu-cell">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { cellProps } from './cell.type'

defineOptions({ name: 'LuCell' })
defineProps({ ...cellProps })
</script>

<style lang="ts">
css({
  '.lu-cell': {
    gridColumn: (props) => `span ${props.column}`,
    gridRow: (props) => `span ${props.row}`,
  }
})
</style>
