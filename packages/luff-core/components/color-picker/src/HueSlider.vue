<template>
  <ColorSlider :gradient-style="gradientStyle"></ColorSlider>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import ColorSlider from './ColorSlider.vue'

defineOptions({ name: 'LuColorPickerHue' })

const gradientStyle = computed<CSSProperties>(() => ({
  backgroundImage:
    'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))'
}))
</script>
