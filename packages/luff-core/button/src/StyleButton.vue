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
        },
        '&:hover': {
          backgroundColor: (props) => computedBtnColor(props, 500)
        }
      },
      outline: {
        '&': {
          color: (props) => computedBtnColor(props),
          border: (props) => computedBtnBorder(props)
        },
        '&:hover': {
          backgroundColor: (props) => computedBtnColor(props, 300)
        }
      },
      light: {
        '&': {
          color: (props) => computedBtnColor(props, 500),
          backgroundColor: (props) => computedBtnColor(props),
        },
        '&:hover': {
          backgroundColor: (props) => computedBtnColor(props, 300),
        }
      },
      subtle: {
        '&': {
          color: (props) => computedBtnColor(props),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => computedBtnColor(props, 300)
        }
      },
      options: {
        default: 'filled'
      }
    },
    size: {
      xs: {
        '&': {
          bSize: 'xs'
        }
      },
      sm: {
        '&': {
          bSize: 'sm'
        }
      },
      md: {
        '&': {
          bSize: 'md'
        }
      },
      lg: {
        '&': {
          bSize: 'lg'
        }
      },
      xl: {
        '&': {
          bSize: 'xl'
        }
      }
      options: {
        default: 'md'
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
