<template>
  <ul class="lu-avatar-group">
    <li v-for="(avatarProps, index) in avatarListMap.displayAvatarList" :key="index" class="lu-avatar-group-item">
      <template v-if="isTooltipDisabled">
        <LuAvatar v-bind="(avatarProps as any)" :border-color="borderColor" />
      </template>
      <template v-else>
        <LuTooltip :content="avatarProps.name" :placement="tooltipPosition">
          <LuAvatar v-bind="(avatarProps as any)" :border-color="borderColor" />
        </LuTooltip>
      </template>
    </li>
    <!-- if the number of avatars exceeds the maximum number of avatars, then display the number of avatars that exceed the maximum number of avatars -->
    <li v-if="moreThanMaxCount" class="lu-avatar-group-item">
      <button class="lu-avatar-more-btn">{{ moreCount }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import LuAvatar from '~/components/avatar'
import LuTooltip from '~/components/tooltip'
import { avatarGroupProps } from './avatarGroup.type'

defineOptions({ name: 'LuAvatarGroup' })

const props = defineProps({ ...avatarGroupProps, ...variants })

const moreThanMaxCount = computed(() => {
  return props.maxCount < props.data.length
})

const moreCount = computed(() => {
  return `+${props.data.length - props.maxCount}`
})

const avatarListMap = computed(() => {
  const { maxCount, data } = props
  // Get the first maxCount avatars to display.
  const displayAvatarList = data.slice(0, maxCount)
  // Get the rest of the avatars to hide in the dropdown.
  const hiddenAvatarList = data.slice(maxCount, data.length)
  return {
    displayAvatarList,
    hiddenAvatarList
  }
})
</script>

<style lang="ts">
css({
  variants: {
    appearance: {
      grid: {
        '&': {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, {size.avatarGroup})',
          gap: '{space.avatarGroupGrid.gap}'
        }
      },
      stack: {
        '&': {
          display: 'flex'
        },
        '& .lu-avatar-group-item': {
          marginRight: '-8px'
        }
      },
      options: {
        default: 'stack'
      }
    }
  },
  '.lu-avatar-group': {
    padding: '0px',
    margin: '0px',
    boxSizing: 'border-box',
    listStyle: 'none',
    marginRight: '8px',
    '& .lu-avatar-group-item': {
      padding: '0px'
    },
    '& .lu-avatar-group-more': {
      display: 'inline-block'
    },
    '& .lu-avatar-more-btn': {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'column',
      width: `{size.avatarGroup}`,
      height: `{size.avatarGroup}`,
      fontSize: `{fontSize.avatar.moreText}`,
      boxShadow: (props) => props.borderColor ? `0 0 0 {size.avatar.shadowSpread} ${props.borderColor}` : '',
      borderRadius: '9999px',
      padding: '0px',
      outline: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box'
    }
  }
})
</style>
