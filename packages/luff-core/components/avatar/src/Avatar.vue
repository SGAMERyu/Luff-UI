<template>
  <component :is="as" class="lu-avatar" :aria-label="label" @click="onClick">
    <img v-if="src && !isImageError" :src="src" :alt="alt" class="lu-avatar-img" @error="onError" />
    <span v-else-if="text">{{ text }}</span>
    <span v-else class="lu-avatar-placeholder">
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

const props = defineProps({ ...avatarProps, ...variants })
const [isImageError, setIsImageError] = useToggle(false)

function onClick() {
  const { href, target } = props
  if (href) {
    window.open(href, target || undefined)
  }
}

function onError() {
  setIsImageError(true)
}
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
          content: '',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '{color.neutral.500}',
          opacity: 0.5,
          borderRadius: 'inherit',
          cursor: 'not-allowed'
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
    boxShadow: (props) => props.borderColor ? `0 0 0 {size.avatar.shadowSpread} ${props.borderColor}` : '',
    '&-placeholder': {
      display: 'inline-flex',
      '& > svg': {
        maxWidth: '100%',
        maxHeight: '100%',
        fill: 'currentColor'
      }
    },
    '&-img': {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit'
    }
    }
  },
)
</style>
