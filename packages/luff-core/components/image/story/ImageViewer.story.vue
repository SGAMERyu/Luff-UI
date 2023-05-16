<template>
  <Story title="ImageViewer">
    <Variant>
      <LuImage preview :src="src" width="400px" height="300px"></LuImage>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuImage from '../src/Image.vue'

const src =
  'https://images.unsplash.com/photo-1682684123154-c21854fd90cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
</script>
