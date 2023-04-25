<template>
  <div class="lu-divider">
    <div v-if="label" class="lu-divider-label">{{ label }}</div>
  </div>
</template>
<script lang="ts" setup>
import { dividerProps } from './divider.type'

defineOptions({ name: "LuDivider" })

defineProps({ ...dividerProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    orientation: {
      vertical: {
        '&': {
          border: '0px',
          borderTop: '1px',
          borderTopColor: (props) => props.color,
          borderTopStyle: (props) => props.variant,
          marginTop: (props) => props.orientationMargin,
          marginBottom: (props) => props.orientationMargin
        }
      },
      horizontal: {
        '&': {
          border: '0px',
          borderLeft: '1px',
          borderLeftColor: (props) => props.color,
          borderLeftStyle: (props) => props.variant,
          marginLeft: (props) => props.orientationMargin,
          marginRight: (props) => props.orientationMargin
        }
      },
      options: {
        default: 'horizontal'
      }
    },
    labelPosition: {
      left: {
        '.lu-divider-label::after': {
          content: "''",
          flex: 1,
          borderTop: (props) => `1px ${props.variant} ${props.color}`
        }
      },
      center: {
        '.lu-divider-label::before': {
          content: "''",
          flex: 1,
          borderTop: (props) => `1px ${props.variant} ${props.color}`,
          marginRight: '8px',
        },
        '.lu-divider-label::after': {
          content: "''",
          flex: 1,
          borderTop: (props) => `1px ${props.variant} ${props.color}`,
          marginLeft: '8px',
        }
      },
      right: {
        '.lu-divider-label::before': {
          content: "''",
          flex: 1,
          borderTop: (props) => `1px ${props.variant} ${props.color}`,
          marginRight: '8px',
        },
      },
      options: {
        default: 'center'
      }
    }
  },
  '.lu-divider-label': {
    display: 'flex',
    alignItems: 'center';
  }
})
</style>
