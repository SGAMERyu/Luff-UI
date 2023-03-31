<template>
  <component :is="as" class="lu-avatar-skeleton"></component>
</template>

<script lang="ts" setup>
import { avatarSkeletonProps } from './avatar.type'
defineOptions({
  name: 'LuAvatarSkeleton'
})

defineProps({ ...avatarSkeletonProps, ...variants })
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
    opacity: {
      normal: {
        '&': {
          opacity: '{opacity.avatar.normal}'
        },
      },
      strong: {
        '&': {
          opacity: '{opacity.avatar.strong}'
        },
      },
      options: {
        default: 'normal'
      }
    }
  },
  '.lu-avatar-skeleton': {
      display: 'inline-flex',
      width: (props) => `{size.avatar.${props.size}}`,
      height: (props) => `{size.avatar.${props.size}}`,
      backgroundColor: (props) => props.color || 'currentcolor'
  }
}
)
</style>
