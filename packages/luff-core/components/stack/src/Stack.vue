<template>
  <component :is="as" class="lu-stack">
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import { stackProps } from './stack.type'

defineOptions({ name: "LuStack" })

defineProps({ ...stackProps })
</script>

<style lang="ts">
css({'.lu-stack': {
  display: 'flex',
  flexDirection: 'column',
  height: (props) => props.height,
  rowGap: (props) => props.gap,
  alignItems: (props) => props.align,
  justifyContent: (props) => props.justify
}})
</style>
