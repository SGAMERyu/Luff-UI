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
const props = defineProps({ ...colorSliderProps })
const emit = defineEmits(['update:modelValue'])

const _value = useVModel(props, 'modelValue', emit)

const { wrapper, position } = useMove({
  onMove({ x }) {
    _value.value = x * props.maxValue
  }
})
const handlerStyle = computed<CSSProperties>(() => ({
  background: props.handleColor,
  left: `${position.value.x * 100}%`
}))
</script>

<style lang="ts">
css({
  '.lu-color-picker-palette': {
    position: 'relative',
    height: '8px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    marginRight: '6px',
    marginLeft: '6px',
    '& .lu-color-picker-handler': {
      position: 'absolute',
      top: '-2px',
      width: '12px',
      height: '12px',
      border: '2px solid rgb(255, 255, 255)',
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'transparent',
      transform: 'translateX(-50%)',
      zIndex:1
    },
    '& .lu-color-picker-gradient': {
      position: 'absolute',
      borderRadius: '15px',
      top: 0,
      bottom: 0,
      boxSizing: 'border-box',
      left: '-6px',
      right: '-6px'
    }
  }
})
</style>
