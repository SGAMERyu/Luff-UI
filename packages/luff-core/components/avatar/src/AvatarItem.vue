<template>
  <component :is="as" class="lu-avatar-item" :aria-label="label" @click="onClick">
    <div>
      <slot name="avatar">
        <component :is="avatar" />
      </slot>
    </div>
    <div class="lu-avatar-item-content">
      <span v-if="primaryText" class="lu-avatar-item-primary-text">{{ primaryText }}</span>
      <span v-if="secondaryText" class="lu-avatar-item-secondary-text">{{ secondaryText }}</span>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { avatarItemProps } from './avatar.type'

defineOptions({
  name: 'LuAvatarItem'
})

const props = defineProps({ ...avatarItemProps, ...variants })

function onClick() {
  const { href, target } = props
  if (href) {
    window.open(href, target || undefined)
  }
}
</script>

<style lang="ts">
css({
  variants: {
    isTruncationDisabled: {
      true: {
        '&': {
          '.lu-avatar-item-primary-text': {
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          '.lu-avatar-item-secondary-text': {
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }
        },
      },
      options: {
        default: true
      }
    }
  },
  '.lu-avatar-item': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (props) => `${props.backgroundColor}`,
    padding: '{space.avatarItem.padding}',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    '&-content': {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 100%',
      maxWidth: '100%',
      paddingLeft: '{space.avatarItem.primaryPadding}',
    },
    '&-primary-text': {
      color: '{color.neutral.800}',
      fontSize: '{fontSize.avatar.text.sm}'
    },
    '&-secondary-text': {
      color: '{color.neutral.400}',
      fontSize: '{fontSize.avatar.text.xs}'
    },
  }
})
</style>
