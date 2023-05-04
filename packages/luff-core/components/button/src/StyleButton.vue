<template>
  <button class="lu-btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { buttonStyleProps } from './button.type'
import { getColor, getBorderColor } from '~/utils'

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
          backgroundColor: (props) => getColor(props.color)
        },
        '&:hover': {
          backgroundColor: (props) => getColor(props.color, 600)
        }
      },
      outline: {
        '&': {
          color: (props) => getColor(props.color),
          border: (props) => getBorderColor(props.color),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => getColor(props.color),
          color: '{color.white}'
        }
      },
      light: {
        '&': {
          color: (props) => getColor(props.color),
          backgroundColor: (props) => getColor(props.color, 100),
        },
        '&:hover': {
          backgroundColor: (props) => getColor(props.color, 200),
        }
      },
      white: {
        '&': {
          backgroundColor: '{color.white}',
          color: (props) => getColor(props.color, 500)
        }
      },
      subtle: {
        '&': {
          color: (props) => getColor(props.color),
          backgroundColor: 'transparent'
        },
        '&:hover': {
          backgroundColor: (props) => getColor(props.color, 100)
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
    fullWidth: {
      true: {
        width: '100%'
      },
      options: {
        default: false
      }
    }
  },
  '.lu-btn': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    height: (props) => `{size.btn.${props.size}}`,
    paddingLeft: (props) => `{space.btn.${props.size}}`,
    paddingRight: (props) => `{space.btn.${props.size}}`,
    fontSize: (props) => `{fontSize.btn.${props.size}}`,
    borderRadius: (props) => `{radii.btn.${props.radius}}`,
  },
})
</style>