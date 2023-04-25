<template>
  <component :is="as">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { markProps } from './mark.type'

defineOptions({ name: "LuMark" })
defineProps({ ...markProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      'background': {
        '&': {
          backgroundColor: (props) => props.color
        }
      },
      'border': {
        '&': {
          border: (props) => `1px solid ${props.color}`
        }
      },
      'underline': {
        '&': {
          textDecoration: (props) => `underline ${props.color}`
        }
      },
      options: {
        default: 'background'
      }
    }
  },
})
</style>
