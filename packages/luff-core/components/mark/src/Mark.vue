<template>
  <component :is="as" class="lu-mark" :style="markStyle">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { markProps } from './mark.type'
import { getColor } from '~/utils'

defineOptions({ name: "LuMark" })
defineProps({ ...markProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      'background': {
        '&': {
          backgroundColor: (props) => getColor(props.color)
        }
      },
      'border': {
        '&': {
          border: (props) => `1px solid ${getColor(props.color)}`
        }
      },
      'underline': {
        '&': {
          textDecoration: (props) => `underline ${getColor(props.color)}`
        }
      },
      options: {
        default: 'background'
      }
    }
  },
  'lu-mark': {
    padding: '{space.mark.padding}'
  }
})
</style>
