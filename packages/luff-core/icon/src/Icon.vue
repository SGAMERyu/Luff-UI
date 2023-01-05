<template>
  <i v-bind="$attrs" class="lu-icon" :style="iconStyle">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { iconProps } from './icon.type'

defineOptions({
  name: 'LuIcon',
  inheritAttrs: false
})

const props = defineProps(iconProps)

const iconStyle = computed(() => {
  return {
    color: props.color
  }
})
</script>

<style lang="ts">
css({
  '.lu-icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em'
  }
})
</style>
