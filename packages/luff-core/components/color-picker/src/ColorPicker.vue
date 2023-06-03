<template>
  <div class="lu-color-picker">
    <Saturation v-model:saturation="parseColor.s" v-model:value="parseColor.v" :saturation-style="saturationStyle" />
    <div class="lu-color-picker-body">
      <div class="lu-color-picker-skip" @click="handleDrop">
        <LuIcon> <SkipIcon /></LuIcon>
      </div>
      <div class="lu-color-picker-preview" :style="previewStyle">
        <LuIcon class="lu-color-picker-copy" @click="copy()"><CopyIcon /></LuIcon>
      </div>
      <div class="lu-color-picker-sliders">
        <HueSlider v-model="parseColor.h" />
        <AlphaSlider v-model="parseColor.a" />
      </div>
    </div>
    <ul v-if="swatches.length" class="lu-color-picker-swatch-list">
      <li
        v-for="swatch in swatches"
        :key="swatch"
        :style="{ background: swatch }"
        class="lu-color-swatch"
        @click="selectSwatch(swatch)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import HueSlider from './HueSlider.vue'
import AlphaSlider from './AlphaSlider.vue'
import Saturation from './Saturation.vue'
import SkipIcon from './SkipIcon.vue'
import CopyIcon from './CopyIcon.vue'
import LuIcon from '~/components/icon/src/Icon.vue'
import { colorPickerProps } from './colorPicker.type'
import { parseColorValue, convertColorFromFormat } from './colorPicker.helper'

defineOptions({ name: 'LuColorPicker' })

const props = defineProps({ ...colorPickerProps })
const emits = defineEmits(['update:modelValue'])

const _value = useVModel(props, 'modelValue', emits)

const parseColor = ref(parseColorValue(props.modelValue))

const { isSupported, open, sRGBHex } = useEyeDropper()

const { copy } = useClipboard({ source: _value })

watch(
  parseColor,
  (val) => {
    _value.value = convertColorFromFormat(val, props.format)
  },
  { deep: true }
)

watch(sRGBHex, (val) => {
  _value.value = convertColorFromFormat(val, props.format)
  parseColor.value = parseColorValue(val)
})

function handleDrop() {
  if (!isSupported.value) {
    return
  }
  open()
}

function selectSwatch(color: string) {
  _value.value = convertColorFromFormat(color, props.format)
  parseColor.value = parseColorValue(color)
}

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
      position: 'relative',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: '1px solid {color.gray.400}',
      cursor: 'pointer',
      '&:hover': {
        '.lu-color-picker-copy': {
          display: 'block'
        },
      }
    },
    '& .lu-color-picker-swatch-list': {
      display: 'grid',
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: '4px',
      listStyle: 'none',
      padding: '0px',
      margin: '8px 0px'
    },
    '& .lu-color-swatch': {
      width: '14px',
      height: '14px',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    '& .lu-color-picker-copy': {
      display: 'none',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#ffffff',
      cursor: 'pointer'
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
