<template>
  <div class="lu-color-picker-alpha">
    <div class="lu-color-picker-handler"></div>
    <div class="lu-color-picker-alpha-slider"></div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'LuColorPickerAlpha' })
</script>

<style lang="ts">
css({
  '.lu-color-picker-alpha': {
      position: 'relative',
      height: '8px',
      borderRadius: '15px',
      backgroundImage: 'conic-gradient(#EEE 0 25%, transparent 0 50%, #EEE 0 75%, transparent 0)',
      backgroundSize: '8px 8px',
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
      '& .lu-color-picker-alpha-slider': {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(255, 0, 4, 0), rgb(50, 119, 255))',
        borderRadius: '15px',
        inset: '0px',
        boxShadow: 'inset 0 0 1px 0 rgba(0, 0, 0, 0.25)'
      }
  }
})
</style>
