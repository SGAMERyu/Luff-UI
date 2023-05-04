<template>
  <component :is="as" class="lu-text">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { textProps } from './text.type'
import { getFontSize, getGradient } from '~/utils'

defineOptions({ name: "LuText" })
defineProps({ ...textProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      text: {
        color: (props) => props.color
      },
      gradient: {
        backgroundImage: (props) => getGradient(props.gradient),
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
      options: {
        default: 'text'
      }
    },
    truncate: {
      true: {
        '&': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }
      },
      options: {
        default: false
      }
    },
    italic: {
      true: {
        '&': {
          fontStyle: 'italic'
        }
      },
      options: {
        default: false
      }
    }
  },
  '.lu-text': {
    fontSize: (props) => getFontSize(props.size),
    fontWeight: (props) => props.weight,
    textAlign: (props) => props.align
  }
})
</style>
