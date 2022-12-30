<template>
  <div class="lu-badge">
    <slot />
    <span class="lu-badge__dot"></span>
  </div>
</template>

<script lang="ts" setup>
import { badgeProps } from './badge.type'
import { variantColor } from '~/utils'

defineOptions({
  name: 'LuBadge'
})

defineProps({ ...badgeProps, ...variants })
</script>

<style lang="ts">
css({
  '.lu-badge': {
    position: 'relative'
    '&__dot': {
      position: 'absolute',
    }
  },
  variants: {
    color: {
      '&__dot': {
        backgroundColor: (props) => variantColor(props),
        border: '1px solid {color.white}'
      }
    },
    size: {
      xs: {
        '&__dot': {
          badgeSpace: 'xs'
        }
      },
      sm: {
        '&__dot': {
          badgeSpace: 'sm'
        }
      },
      md: {
        '&__dot': {
          badgeSpace: 'md'
        }
      },
      lg: {
        '&__dot': {
          badgeSpace: 'lg'
        }
      },
      xl: {
        '&__dot': {
          badgeSpace: 'xl'
        }
      },
      options: {
        default: 'md'
      }
    },
    placement: {
      'bottom-left': {
        '&': {
          badgePlacement: 'bottom-left'
        }
      },
      'bottom-right': {
        '&': {
          badgePlacement: 'bottom-right'
        }
      },
      'top-left': {
        '&': {
          badgePlacement: 'top-left'
        }
      },
      'top-right': {
        '&': {
          badgePlacement: 'top-right'
        }
      },
      options: {
        default: 'top-right'
      }
    }
  }
})
</style>
