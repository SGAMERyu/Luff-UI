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
import { variantColor } from '~/utils'

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
          backgroundColor: (props) => variantColor(props)
        }
      },
      outline: {
        '&': {
          color: (props) => variantColor(props),
          border: (props) => variantBorderColor(props)
        }
      },
      light: {
        '&': {
          color: (props) => variantColor(props, 500),
          backgroundColor: (props) => variantColor(props),
        }
      }
    }
  },
  '.lu-alert': {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '{size.alertSpace}',
    width: '100%',
    '&__content': {
      flex: 1
    }
  }
})
</style>
