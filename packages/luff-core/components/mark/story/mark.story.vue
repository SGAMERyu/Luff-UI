<template>
<Story 
  title="Mark"
  :layout="{
      type: 'grid'
  }">
    <Variant>
      <p>this is a  <LuMark variant="background">mark</LuMark> title</p>
      <p>this is a  <LuMark variant="border">mark</LuMark> title</p>
      <p>this is a  <LuMark variant="underline">mark</LuMark> title</p>
    </Variant>
</Story>
</template>

<script lang="ts" setup>
import LuMark from '../src/Mark.vue'
</script>
