<template>
  <Story
    title="ColorPicker"
    :layout="{
      type: 'grid',
      width: '500px'
    }"
  >
    <Variant> <LuColorPicker /> </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuColorPicker from '../src/ColorPicker.vue'
</script>
