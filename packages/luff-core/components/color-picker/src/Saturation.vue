<template>
  <div ref="wrapperRef" class="lu-color-picker-saturation-root">
    <div class="lu-color-picker-saturation-handler" :style="handlerStyle"></div>
    <div class="lu-color-picker-saturation" :style="saturationStyle"></div>
  </div>
</template>

<script lang="ts" setup>
import { useMove } from '~/hook'
import { colorSaturationProps } from './colorPicker.type'

defineOptions({
  name: 'LuSaturation'
})
const props = defineProps({ ...colorSaturationProps })
const emits = defineEmits(['update:value', 'update:saturation'])

const _value = useVModel(props, 'value', emits)
const _saturation = useVModel(props, 'saturation', emits)

const { wrapperRef, position } = useMove({
  onMove({ x, y }) {
    _value.value = Math.round((1 - y) * 100)
    _saturation.value = Math.round(x * 100)
  },
  onEnd({ x, y }) {
    _value.value = Math.round(1 - y) * 100
    _saturation.value = Math.round(x * 100)
  }
})
const handlerStyle = computed(() => {
  return {
    left: `${position.value.x * 100}%`,
    top: `${position.value.y * 100}%`
  }
})
</script>

<style lang="ts">
css({
  '.lu-color-picker-saturation-root': {
      position: 'relative',
      margin: '6px',
      boxSizing: 'border-box',
      height: '124px',
      '.lu-color-picker-saturation': {
        position: 'absolute',
        top: '-6px',
        bottom: '-6px',
        left: '-6px',
        right: '-6px',
        backgroundImage: 'linear-gradient(0deg, rgb(0, 0, 0), transparent), linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0))'
      },
      '.lu-color-picker-saturation-handler': {
        position: 'absolute',
        width: '12px',
        height: '12px',
        border: '2px solid rgb(255, 255, 255)',
        borderRadius: '50%',
        cursor: 'pointer',
        background: 'transparent',
        transform: 'translate(-50%, -50%)',
        zIndex:1
      }
  },
})
</style>
