<template>
  <div class="lu-alert">
    <div class="lu-alert__content">
      <LuffIcon>
        <component :is="icon"></component>
      </LuffIcon>
      <slot name="title">
        <LuffBalancer>{{ title }}</LuffBalancer>
      </slot>
      <slot v-if="description || $slots.description" name="description">
        <LuffBalancer>{{ description }}</LuffBalancer>
      </slot>
    </div>
    <LuffIcon><LuCloseCircleFill /></LuffIcon>
  </div>
</template>

<script lang="ts" setup>
import { alertProps } from './alert.type'
import { LuffBalancer } from '~/balancer'
import { LuffIcon } from '~/icon'
import { LuCloseCircleFill } from '@luff-ui/icon'
import { variantTextColor } from '~/utils'

defineOptions({
  name: 'LuAlert'
})

defineProps({ ...alertProps, ...variants })
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      filled: {
        '&': {
          color: '{color.white}',
          backgroundColor: (props) => variantTextColor(props)
        }
      },
      outline: {
        '&': {
          color: (props) => variantTextColor(props),
          border: (props) => variantBorderColor(props)
        }
      },
      light: {
        '&': {
          color: (props) => variantTextColor(props, 500),
          backgroundColor: (props) => variantTextColor(props),
        }
      }
    }
  },
  '.lu-alert': {
    display: 'flex',
    gap: '8px',
    alignItem: 'center',
    padding: '{size.alertSpace}'
    width: '100%',
    '&__content': {
      flex: 1
    }
  }
})
</style>
