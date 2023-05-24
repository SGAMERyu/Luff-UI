<template>
  <ColorSlider
    v-model="_value"
    :gradient-style="gradientStyle"
    :max-value="360"
    :handle-color="handleColor"
  ></ColorSlider>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue'
import ColorSlider from './ColorSlider.vue'

defineOptions({ name: 'LuHueSlider' })

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const _value = useVModel(props, 'modelValue', emit)

const handleColor = computed(() => {
  return `hsl(${_value.value}, 100%, 50%)`
})

const gradientStyle = computed<CSSProperties>(() => ({
  backgroundImage:
    'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 255, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255), rgb(255, 0, 0))'
}))
</script>
