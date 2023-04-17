<template>
  <component :is="as"></component>
</template>

<script lang="ts" setup>
  import { flexProps } from './flex.type'
  
  defineOptions({ name: "LuFlex" })
  defineProps({ ...flexProps })
</script>

<style lang="ts">
css({'.lu-flex': {
  display: 'flex',
  alignItem: (props) => props.align,
  justifyContent: (props) => props.justify,
  gap: (props) => props.gap,
  flexDirection: (props) => props.direction,
  flexWrap: (props) => props.wrap
}})
</style>
