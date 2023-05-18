<template>
  <div class="lu-color-picker-hue">
    <div class="lu-color-picker-handler"></div>
    <div class="lu-color-picker-gradient"></div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'LuColorPickerHue' })
</script>

<style lang="ts">
css({
  '& .lu-color-picker-hue': {
    position: 'relative',
    height: '8px',
    borderRadius: '15px',
    '& .lu-color-picker-handler': {
      position: 'absolute',
      top: '-2px',
      width: '12px',
      height: '12px',
      border: '2px solid rgb(255, 255, 255)',
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'rgb(50, 119, 255)'
    },
    '& .lu-color-picker-gradient': {
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0));',
      borderRadius: '15px'
    }
  },
})
</style>
