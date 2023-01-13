<template>
  <div class="lu-badge">
    <slot />
    <span class="lu-badge__dot">
      <slot name="content">{{ content }}</slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { badgeProps } from './badge.type'
import { variantColor } from '~/utils'

defineOptions({
  name: 'LuBadge'
})

const props = defineProps({ ...badgeProps, ...variants })

function createDotPlacement() {
  const { placement } = props
  if (placement === 'bottom-left') {
    return 'calc(100% - 12px) calc(100% - 12px) auto auto'
  } else if (placement === 'bottom-right') {
    return 'calc(100% - 12px) auto auto calc(100% - 12px)'
  } else if (placement === 'top-left') {
    return 'auto calc(100% - 12px) calc(100% - 12px) auto'
  } else if (placement === 'top-right') {
    return 'auto auto calc(100% - 12px) calc(100% - 12px)'
  }
}
</script>

<style lang="ts">
css({
  '.lu-badge': {
    position: 'relative',
    '&__dot': {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{color.white}',
      border: '2px solid {color.white}',
      borderRadius: '{radii.badge}',
      fontSize: '{fontSize.xs}',
      padding: '{size.badge.dotSpace}',
      backgroundColor: (props) => variantColor(props.color),
      inset: (props) => createDotPlacement(props)
    }
  },
  variants: {
    size: {
      sm: {
        '.lu-badge__dot': {
          badgeSize: 'sm',
        }
      },
      default: {
        '.lu-badge__dot': {
          badgeSize: 'default',
        }
      },
      options: {
        default: 'default'
      }
    },
    dot: {
      true: {
        '.lu-badge__dot': {
          minWidth: '{size.badge.dotSize}',
          height: '{size.badge.dotSize}',
          fontSize: '0px',
        }
      },
      options: {
        default: false
      }
    }
  }
})
</style>
