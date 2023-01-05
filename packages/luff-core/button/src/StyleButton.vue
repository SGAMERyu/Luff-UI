<template>
    <button class="lu-btn">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { buttonStyleProps } from './button.type'
import { variantColor, variantBorderColor } from '~/utils'

defineOptions({
    name: 'LuStyleButton'
})

defineProps({ ...buttonStyleProps, ...variants })
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
          backgroundColor: (props) => variantColor(props, 600)
        }
      },
      outline: {
        '&': {
          color: (props) => variantColor(props),
          border: (props) => variantBorderColor(props),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props),
          color: '{color.white}'
        }
      },
      light: {
        '&': {
          color: (props) => variantColor(props),
          backgroundColor: (props) => variantColor(props, 100),
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 200),
        }
      },
      white: {
        '&': {
          backgroundColor: '{color.white}',
          color: (props) => variantColor(props, 500)
        }
      },
      subtle: {
        '&': {
          color: (props) => variantColor(props),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => variantColor(props, 100)
        }
      },
      default: {
        '&': {
          color: '{color.gray.500}',
          border: '1px solid {color.gray.500}',
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: '{color.gray.100}'
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
        default: 'sm'
      }
    },
  },
  '.lu-btn': {
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: (props) => `{size.btnRound.${props.radius}}`,
  },
})
</style>