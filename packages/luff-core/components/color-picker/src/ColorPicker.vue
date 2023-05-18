<template>
  <div class="lu-color-picker">
    <div class="lu-color-picker-palette">
      <div class="lu-color-picker-saturation"></div>
    </div>
    <div class="lu-color-picker-body">
      <div class="lu-color-picker-skip">
        <LuIcon> <SkipIcon /></LuIcon>
      </div>
      <div class="lu-color-picker-preview"></div>
      <div class="lu-color-picker-sliders">
        <HueSlider />
        <AlphaSlider />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HueSlider from './HueSlider.vue'
import AlphaSlider from './AlphaSlider.vue'
import SkipIcon from './SkipIcon.vue'
import LuIcon from '~/components/icon/src/Icon.vue'

defineOptions({ name: 'LuColorPicker' })
</script>

<style lang="ts">
css({
  variants: {},
  '.lu-color-picker': {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    '& .lu-color-picker-palette': {
      position: 'relative',
    },
    '& .lu-color-picker-saturation': {
      height: '124px',
      backgroundColor: 'rgb(50, 119, 255)',
      backgroundImage: 'linear-gradient(0deg, rgb(0, 0, 0), transparent), linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0))'
    },
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
      background: 'red',
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
