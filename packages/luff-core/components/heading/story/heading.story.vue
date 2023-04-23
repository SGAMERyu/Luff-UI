<template>
<Story 
  title="Heading" 
  :layout="{
    type: 'grid'
  }">
    <Variant>
      <LuHeading level="1">This is h1 title</LuHeading>
      <LuHeading level="2">This is h2 title</LuHeading>
      <LuHeading level="3">This is h3 title</LuHeading>
      <LuHeading level="4">This is h4 title</LuHeading>
      <LuHeading level="5">This is h5 title</LuHeading>
      <LuHeading level="6">This is h6 title</LuHeading>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuHeading from '../src/Heading.vue'
</script>
