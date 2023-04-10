<template>
  <div class="lu-overlay"></div>
</template>

<script setup lang="ts">
import { overlayProps } from './overlay.type'
import { convertToRGB } from '~/utils'

defineOptions({ name: 'LuOverlay' })
defineProps({ ...overlayProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    fixed: {
      true: {
        '&': {
          position: 'fixed',
        }
      },
      options: {
        default: false
      }
    },
    center: {
      true: {
        '&': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }
      },
      options: {
        default: false
      }
    },
  },
  '.lu-overlay': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    background: (props) => `rgba(${convertToRGB(props.color)}, ${props.opacity})`,
    zIndex: (props) => props.zIndex,
    backdropFilter: (props) => props.blur ? `blur(${props.blur})` : '',
  }
})
</style>
