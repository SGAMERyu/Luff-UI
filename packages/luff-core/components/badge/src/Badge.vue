<template>
  <component :is="as">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { badgeProps } from './badge.type'
defineOptions({
  name: 'LuBadge'
})

defineProps({ ...badgeProps })
</script>

<script lang="ts"></script>

<style lang="ts"></style>
