<template>
<Story 
  title="Link" 
  :layout="{
    type: 'grid',
   }">
        <Variant title="base">
          <div class="demo-block">
            <LuLink>default</LuLink>
            <LuLink color="primary">primary</LuLink>
            <LuLink color="warning">warning</LuLink>
            <LuLink color="success">success</LuLink>
            <LuLink color="danger">danger</LuLink>
          </div>
        </Variant>
        <Variant title="variant">
          <div class="demo-block">
            <LuLink color="primary">link</LuLink>
            <LuLink color="primary" variant="underline">link</LuLink>
            <LuLink color="primary" variant="hover">link</LuLink>
            <LuLink color="primary" disabled>link</LuLink>
          </div>
        </Variant>
    </Story>
</template>

<script lang="ts" setup>
import LuLink from '../src/Link.vue'
</script>

<style scoped>
.demo-block {
  display: flex;
  gap: 8px;
}
</style>
