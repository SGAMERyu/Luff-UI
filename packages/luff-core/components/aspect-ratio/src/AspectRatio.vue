<template>
  <div class="lu-aspect-ratio"><slot></slot></div>
</template>

<script lang="ts" setup>
import { aspectRatioProps } from './aspectRatio.type'

defineOptions({ name: 'LuAspectRatio' })
defineProps({ ...aspectRatioProps })
</script>

<style lang="ts">
css({'.lu-aspect-ratio': {
  position: 'relative',
  maxWidth: '100%',
  boxSizing: 'border-box',
  '&::before': {
    content: '""',
    display: 'block',
    height: 0,
    paddingBottom: (props) => `${1 / props.ratio * 100}%`
  },
  '&::after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
  '& > *:not(style)': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  '& > img, & > video': {
    objectFit: 'cover',
  },
}})
</style>
