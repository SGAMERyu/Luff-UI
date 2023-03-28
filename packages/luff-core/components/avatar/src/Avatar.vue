<template>
  <component :is="as" class="lu-avatar">
    <img v-if="src" :src="src" />
    <span v-else-if="text">{{ text }}</span>
    <span v-else class="lu-avatar__placeholder">
      <AvatarPlaceholderIcon />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { avatarProps } from './avatar.type'
import AvatarPlaceholderIcon from './AvatarPlaceholderIcon.vue'

defineOptions({
  name: 'LuAvatar'
})

defineProps({ ...avatarProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    appearance: {
      circle: {
        '&': {
          borderRadius: '{radii.avatar.circle}'
        }
      },
      square: {
        '&': {
          borderRadius: '{radii.avatar.square}'
        }
      },
      options: {
        default: 'circle'
      }
    },
    variant: {
      light: {
        '&': {
          backgroundColor: (props) => `{color.${props.color}.100}`,
          color: (props) => props.textColor || `{color.${props.color}.500}`
        },
      },
      filled: {
        '&': {
          backgroundColor: (props) => `{color.${props.color}.500}`,
          color: (props) => props.textColor || '{color.white}'
        },
      },
      outline: {
        '&': {
          backgroundColor: 'transparent',
          border: (props) => `{borderWidth.avatar.outline} solid {color.${props.color}.500}`,
          color: (props) => props.textColor || `{color.${props.color}.500}`,
        },
      },
      options: {
        default: 'light'
      }
    },
    disabled: {
      true: {
        '&::before': {
          display: 'block',
          content: 'test',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '{color.neutral.500}',
          opacity: 0.5
        },
        options: {
          default: false
        }
      }
    }
  },
  '.lu-avatar': {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    verticalAlign: 'middle',
    width: (props) => `{size.avatar.${props.size}}`,
    height: (props) => `{size.avatar.${props.size}}`,
    fontSize: (props) => `{fontSize.avatar.text.${props.size}}`,
    '&__placeholder': {
      display: 'inline-flex',
      '& > svg': {
        maxWidth: '100%',
        maxHeight: '100%',
        fill: 'currentColor'
      }
    },
    }
  },
)
</style>
