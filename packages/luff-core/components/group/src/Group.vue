<template>
  <component :is="as" class="lu-group">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { groupProps } from './group.type'
defineOptions({ name: "LuGroup" })

defineProps({ ...groupProps })

</script>

<style lang="ts">
css({'.lu-group': {
  display: 'flex',
  flexWrap: (props) => props.noWrap ? 'nowrap' : 'wrap',
  columnGap: (props) => props.gap,
  alignItems: (props) => props.align,
  justifyContent: (props) => props.justify
}})
</style>
