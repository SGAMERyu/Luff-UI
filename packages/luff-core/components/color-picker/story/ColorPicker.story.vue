<template>
  <Story
    title="ColorPicker"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant>
      <LuColorPicker
        v-model="color"
        :swatches="[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14'
        ]"
      />
      <div>{{ color }}</div>
    </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuColorPicker from '../src/ColorPicker.vue'

const color = ref('#fffff')
</script>
