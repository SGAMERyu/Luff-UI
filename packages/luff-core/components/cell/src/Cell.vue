<template>
  <component :is="as">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { cellProps } from './cell.type'

defineOptions({ name: 'LuCell' })
defineProps({ ...cellProps })
</script>
