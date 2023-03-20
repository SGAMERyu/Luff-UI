<template>
  <Story
    title="button"
    :layout="{
      type: 'grid',
      width: '500px'
    }"
  >
    <Variant title="baseButton">
      <LuButton>button</LuButton>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuButton from './Button.vue'
</script>
