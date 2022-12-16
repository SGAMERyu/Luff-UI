<template>
  <button class="lu-btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonProps } from './button.type'

defineOptions({
  name: 'LuStyleButton'
})

defineProps<ButtonProps>()
</script>

<style lang="ts">
css({
  '.lu-btn': {
    display: 'flex',
    color: '{colors.primary.100}',
    background: (props) => `{colors.${props.color}.400}`
  }
})
</style>
