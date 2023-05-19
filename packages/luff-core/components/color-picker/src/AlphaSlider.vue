<template>
  <ColorSlider :root-style="rootStyle" :gradient-style="gradientStyle"></ColorSlider>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import ColorSlider from './ColorSlider.vue'

defineOptions({ name: 'LuColorPickerAlpha' })

const rootStyle = computed<CSSProperties>(() => ({
  backgroundImage: 'conic-gradient(#EEE 0 25%, transparent 0 50%, #EEE 0 75%, transparent 0)',
  backgroundSize: '8px 8px'
}))

const gradientStyle = computed<CSSProperties>(() => ({
  background: 'linear-gradient(to right, rgba(255, 0, 4, 0), rgb(50, 119, 255))',
  inset: '0px',
  boxShadow: 'inset 0 0 1px 0 rgba(0, 0, 0, 0.25)'
}))
</script>
