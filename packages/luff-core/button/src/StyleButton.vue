<template>
  <component is="button" class="lu-btn">
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineOptions({
  name: "LuStyleButton",
});
</script>

<style lang="ts">
css({
  '.lu-btn': {
    display: 'flex',
    color: '{colors.primary.100}'
  }
})
</style>
