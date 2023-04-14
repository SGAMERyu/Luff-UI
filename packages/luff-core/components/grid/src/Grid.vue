<template>
  <component :is="as" class="lu-grid">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { gridProps } from './grid.type'
import { isNumber } from '@vueuse/core'

defineOptions({ name: 'LuGrid' })

defineProps({ ...gridProps })
</script>

<style lang="ts">
css({'.lu-grid': {
  display: 'grid',
  gap: (props) => Array.isArray(props.gap) ? props.gap.join(' ') : props.gap,
  gridTemplateColumns: (props) => isNumber(props.columns) ? `repeat(${props.columns}, 1fr)` : props.columns,
  gridTemplateRows: (props) => isNumber(props.rows) ? `repeat(${props.rows}, 1fr)` : props.rows,
  justifyItems: (props) => props.justify,
  alignItems: (props) => props.align,
}})
</style>
<!--  -->
