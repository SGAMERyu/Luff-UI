<template>
  <Story
    title="Badge"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant title="badge">
      <LuBadge></LuBadge>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import LuBadge from '../src/Badge.vue'
</script>
