<template>
  <div class="lu-color-picker">
    <div class="lu-color-picker-overlay">

    </div>
  </div>
</template>

<script lang="ts" setup>


defineOptions({ name: 'LuColorPicker' })
</script>

<style lang="ts">
css({
  variants: {},
  '.lu-color-picker': {
    display: 'flex',
    '& .lu-color-picker-overlay': {
      width: '200px',
      height: '124px',
      backgroundImage: "linear-gradient(0deg, rgb(0, 0, 0), transparent)"
    }
  }
})
</style>
