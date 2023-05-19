<template>
  <div ref="wrapper" class="lu-color-picker-palette" :style="rootStyle">
    <div ref="handlerRef" class="lu-color-picker-handler" :style="handlerStyle"></div>
    <div class="lu-color-picker-gradient" :style="gradientStyle"></div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import { colorSliderProps } from './colorPicker.type'
import { useMove } from '~/hook'

defineOptions({ name: 'LuColorSlider' })
defineProps({ ...colorSliderProps })

const { wrapper, position } = useMove()
const handlerStyle = computed<CSSProperties>(() => ({
  left: `${position.value.x}%`
}))
</script>

<style lang="ts">
css({
  '.lu-color-picker-palette': {
    position: 'relative',
    height: '8px',
    borderRadius: '15px',
    cursor: 'pointer',
    '& .lu-color-picker-handler': {
      position: 'absolute',
      top: '-2px',
      width: '12px',
      height: '12px',
      border: '2px solid rgb(255, 255, 255)',
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'rgb(50, 119, 255)',
    },
    '& .lu-color-picker-gradient': {
      width: '100%',
      height: '100%',
      borderRadius: '15px'
    }
  }
})
</style>
