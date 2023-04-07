<template>
  <component :is="as" class="lu-badge-root">
    <span class="lu-badge">
      <template v-if="!dot && count">{{ displayCount }}</template>
    </span>
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { badgeProps } from './badge.type'
defineOptions({
  name: 'LuBadge'
})

const props = defineProps({ ...badgeProps, ...variants })

const displayCount = computed(() => {
  if (props.max && typeof props.max === 'number') {
    if (props.count > props.max) return props.max + '+'
  }
  return props.count
})
</script>

<style lang="ts">
css({
  variants: {
    dot: {
      true: {
        '& .lu-badge': {
          minWidth: '{size.badge.dot}',
          height: '{size.badge.dot}',
          padding: '0px'
        }
      },
      false: {
        '& .lu-badge': {
          minWidth: '{size.badge.default}',
          height: '{size.badge.default}',
          padding: '{space.badge}'
        }
      },
      options: {
        default: false
      }
    },
    placement: {
      'top-right': {
        '& .lu-badge': {
          top: '15%',
          right: '15%',
        }
      },
      'top-left': {
        '& .lu-badge': {
          top: '15%',
          left: '15%',
        }
      },
      'bottom-left': {
        '& .lu-badge': {
          bottom: '15%',
          left: '15%',
        }
      },
      'bottom-right': {
        '& .lu-badge': {
          bottom: '15%',
          right: '15%',
        }
      },
      options: {
        default: 'top-right'
      }
    }
  },
  '.lu-badge-root': {
    position: 'relative',
    display: 'inline-flex',
    verticalAlign: 'middle',
    '& .lu-badge': {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '{radii.badge}',
      fontSize: '{fontSize.badge}',
      color: '{color.white}',
      textAlign: 'center',
      transform: 'translate(50%, -50%)',
      background: (props) => `{color.${props.color}.500}`,
      zIndex: (props) => props.zIndex,
      boxShadow: (props) => `0 0 0 ${props.borderWeight} #fff`
    },
  }
})
</style>
