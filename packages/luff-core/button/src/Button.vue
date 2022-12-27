<template>
  <LuStyleButton>
    <span v-if="$slots.leftIcon">
      <slot name="leftIcon"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
    <span v-if="$slots.rightIcon">
      <slot name="rightIcon"></slot>
    </span>
  </LuStyleButton>
</template>

<script lang="ts" setup>
import LuStyleButton from './StyleButton.vue'

defineOptions({
  name: 'LuButton'
})
</script>
