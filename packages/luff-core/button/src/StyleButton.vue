<template>
  <button class="lu-btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { buttonProps } from './button.type'
import { computedBtnColor, computedBtnBorder } from './button.style'

defineOptions({
  name: 'LuStyleButton'
})

defineProps({ ...buttonProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      filled: {
        '&': {
          color: '{color.white}',
          backgroundColor: (props) => computedBtnColor(props)
        }
      },
      options: {
        default: 'filled'
      }
    }
  },
  '.lu-btn': {
    display: 'flex',
    outline: 'none',
    border: 'none',
  },
})
</style>
