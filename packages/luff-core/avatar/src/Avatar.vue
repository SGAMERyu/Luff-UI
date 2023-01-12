<template>
  <div class="lu-avatar">
    <img v-if="src" :src="src" :alt="alt" class="lu-avatar__image" />
    <div v-else class="lu-avatar__content">
      <slot>
        <LuffIcon><LuUserLine /></LuffIcon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { avatarProps } from './avatar.type'
import { LuUserLine } from '@luff-ui/icon'
import { LuffIcon } from '~/icon'
import { variantColor, variantBorderColor } from '~/utils'

defineOptions({
  name: 'LuAvatar'
})

defineProps({ ...avatarProps, ...variants })
</script>

<style lang="ts">
css({
  '.lu-avatar': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (props) => `{size.avatarRound.${props.radius}}`,
    boxSizing: 'border-box',
    '&__content': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&__image': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
  },
  variants: {
    variant: {
      filled: {
        '&': {
          color: '{color.white}',
          backgroundColor: (props) => variantColor(props.color)
        }
      },
      outline: {
        '&': {
          color: (props) => variantColor(props.color),
          border: (props) => variantBorderColor(props.color)
        }
      },
      light: {
        '&': {
          color: (props) => variantColor(props.color),
          backgroundColor: (props) => variantColor(props.color, 100)
        }
      },
      options: {
        default: 'light'
      }
    },
    size: {
      xs: {
        '&': {
          avatarSize: 'xs'
        }
      },
      sm: {
        '&': {
          avatarSize: 'sm'
        }
      },
      md: {
        '&': {
          avatarSize: 'md'
        }
      },
      lg: {
        '&': {
          avatarSize: 'lg'
        }
      },
      xl: {
        '&': {
          avatarSize: 'xl'
        }
      },
      options: {
        default: 'md'
      }
    }
  }
})
</style>
