<template>
  <Story 
    title="Image" 
    :layout="{
        type: 'grid',
        width: '800px'
    }">
      <Variant title="base">
        <LuImage :src="src" width="200px" height="80px"/>
      </Variant>
      <Variant title="caption">
        <LuImage :src="src" caption="this is caption"  width="200px" height="80px" />
      </Variant>
      <Variant title="caption">
        <LuImage :src="undefined" caption="this is caption" width="200px" height="80px"/>
      </Variant>
      <Variant title="fit">
        <LuImage :src="src" width="200px" height="80px"/>
        <LuImage :src="src" fit="cover" width="200px" height="80px"/>
        <LuImage :src="src" fit="fill" width="200px" height="80px"/>
        <LuImage :src="src" fit="none" width="200px" height="80px"/>
      </Variant>
      <Variant title="loader">
        <LuImage :src="src" width="200px" height="80px" show-loader />
      </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuImage from '../src/Image.vue'

const src = "https://images.unsplash.com/photo-1682684123154-c21854fd90cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
</script>
