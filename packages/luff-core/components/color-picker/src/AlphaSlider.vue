<template>
  <ColorSlider v-model="_value" :root-style="rootStyle" :gradient-style="gradientStyle" :max-value="1"></ColorSlider>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import ColorSlider from './ColorSlider.vue'

defineOptions({ name: 'LuAlphaSlider' })
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const _value = useVModel(props, 'modelValue', emit)

const rootStyle = computed<CSSProperties>(() => ({
  backgroundImage: 'conic-gradient(#EEE 0 25%, transparent 0 50%, #EEE 0 75%, transparent 0)',
  backgroundSize: '8px 8px'
}))

const gradientStyle = computed<CSSProperties>(() => ({
  background: 'linear-gradient(to right, rgba(255, 0, 4, 0), rgb(50, 119, 255))',
  boxShadow: 'inset 0 0 1px 0 rgba(0, 0, 0, 0.25)'
}))
</script>
