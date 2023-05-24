<template>
  <Story
    title="ColorPicker"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant>
      <LuColorPicker v-model="color" />
      <div>{{ color }}</div>
    </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuColorPicker from '../src/ColorPicker.vue'

const color = ref('#fffff')
</script>
