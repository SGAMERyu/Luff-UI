<template>
  <button class="lu-btn">
    <span>{{ variant }}</span>
  </button>
</template>

<script lang="ts" setup>
import type { ButtonProps } from './button'

defineOptions({
  name: 'LuStyleButton'
})

defineProps<ButtonProps>()
</script>

<style lang="ts">
css({
  '.lu-btn': {
    display: 'flex',
    color: '{colors.primary.100}'
  }
})
</style>
