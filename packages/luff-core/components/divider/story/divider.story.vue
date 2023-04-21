<template>
  <Story 
    title="Divider" 
    :layout="{
      type: 'grid',
      width: '500px'
    }">
      <Variant>
        <LuDivider></LuDivider>
        <LuDivider variant="dashed"></LuDivider>
        <LuDivider variant="dotted"></LuDivider>
      </Variant>
      <Variant title="label">
        <LuDivider label="text on the left"></LuDivider>
        <LuDivider label="text on the center"></LuDivider>
        <LuDivider label="text on the right"></LuDivider>
      </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuDivider from '../src/Divider.vue'
</script>
