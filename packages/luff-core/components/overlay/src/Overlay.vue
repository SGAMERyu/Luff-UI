<template>
  <div class="lu-overlay"></div>
</template>

<script setup lang="ts">
import { overlayProps } from './overlay.type'
import { convertColor } from '~/utils'

defineOptions({ name: 'LuOverlay' })
defineProps({ ...overlayProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      color: {
        background: (props) => `rgba(${convertColor(props.color).toRgbArray().join('')}, ${props.opacity})`,
        backdropFilter: (props) => props.blur ? `blur(${props.blur})` : '',
      },
      image: {
        backgroundImage: (props) => `url(${props.image})`,
        filter: (props) => props.blur ? `blur(${props.blur})` : '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transform: 'scale(1.3)',
        '&::after': {
          position: 'absolute',
          background: (props) => `rgba(${convertColor(props.color).toRgbArray().join('')}, ${props.opacity})`,
          content: "''",
          width: '100%',
          height: '100%',
          top: 0,
          left: 0
        }
      },
      options: {
        default: 'color'
      }
    },
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
    zIndex: (props) => props.zIndex,
  }
})
</style>
