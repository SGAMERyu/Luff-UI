<template>
  <div class="lu-color-picker">
    <Saturation v-model:saturation="parseColor.s" v-model:value="parseColor.v" :saturation-style="saturationStyle" />
    <div class="lu-color-picker-body">
      <div class="lu-color-picker-skip">
        <LuIcon> <SkipIcon /></LuIcon>
      </div>
      <div class="lu-color-picker-preview" :style="previewStyle"></div>
      <div class="lu-color-picker-sliders">
        <HueSlider v-model="parseColor.h" />
        <AlphaSlider v-model="parseColor.a" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import HueSlider from './HueSlider.vue'
import AlphaSlider from './AlphaSlider.vue'
import Saturation from './Saturation.vue'
import SkipIcon from './SkipIcon.vue'
import LuIcon from '~/components/icon/src/Icon.vue'
import { colorPickerProps } from './colorPicker.type'
import { parseColorValue, convertHsvaFromFormat } from './colorPicker.helper'

defineOptions({ name: 'LuColorPicker' })

const props = defineProps({ ...colorPickerProps })
const emits = defineEmits(['update:modelValue'])

const _value = useVModel(props, 'modelValue', emits)

const parseColor = ref(parseColorValue(props.modelValue))

const saturationStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: `hsl(${parseColor.value.h}, 100%, 50%)`
  }
})

const previewStyle = computed<CSSProperties>(() => {
  return {
    backgroundColor: _value.value
  }
})

watch(
  parseColor,
  () => {
    const formatColor = convertHsvaFromFormat(parseColor.value, props.format)
    _value.value = formatColor
  },
  { deep: true }
)
</script>

<style lang="ts">
css({
  '.lu-color-picker': {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    padding: '8px',
    '& .lu-color-picker-skip': {
      fontSize: '24px',
      cursor: 'pointer'
    },
    '& .lu-color-picker-body': {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '8px'
    },
    '& .lu-color-picker-preview': {
      width: '24px',
      height: '24px',
      borderRadius: '50%'
    },
    '& .lu-color-picker-sliders': {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1,
    }
  }
})
</style>
