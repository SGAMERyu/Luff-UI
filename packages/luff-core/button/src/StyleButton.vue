<template>
  <button class="lu-btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { buttonProps } from './button.type'
import { variantColor, variantBorderColor } from '~/utils'

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
          backgroundColor: (props) => variantColor(props)
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 500)
        }
      },
      outline: {
        '&': {
          color: (props) => variantColor(props),
          border: (props) => variantBorderColor(props)
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 300)
        }
      },
      light: {
        '&': {
          color: (props) => variantColor(props, 500),
          backgroundColor: (props) => variantColor(props),
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 300),
        }
      },
      subtle: {
        '&': {
          color: (props) => variantColor(props),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 300)
        }
      },
      options: {
        default: 'filled'
      }
    },
    size: {
      xs: {
        '&': {
          btnSize: 'xs'
        }
      },
      sm: {
        '&': {
          btnSize: 'sm'
        }
      },
      md: {
        '&': {
          btnSize: 'md'
        }
      },
      lg: {
        '&': {
          btnSize: 'lg'
        }
      },
      xl: {
        '&': {
          btnSize: 'xl'
        }
      },
      options: {
        default: 'md'
      }
    },
  },
  '.lu-btn': {
    display: 'flex',
    outline: 'none',
    border: 'none',
  },
})
</style>
