<template>
  <Story
    title="ColorPicker"
    :layout="{
      type: 'grid'
    }"
  >
    <Variant> <LuColorPicker /> </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuColorPicker from '../src/ColorPicker.vue'
</script>
