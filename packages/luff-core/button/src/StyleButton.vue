<template>
  <button class="lu-btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'LuStyleButton'
})
</script>

<style lang="ts">
css({
  '.lu-btn': {
    display: 'flex',
    color: '{colors.primary.100}'
  }
})
</style>
