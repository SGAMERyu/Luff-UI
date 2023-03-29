<template>
  <Story
    title="avatar"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant title="avatar">
      <div class="demo-block">
        <LuAvatar></LuAvatar>
        <LuAvatar appearance="square"></LuAvatar>
      </div>
      <div class="demo-block">
        <LuAvatar></LuAvatar>
        <LuAvatar variant="filled"></LuAvatar>
        <LuAvatar variant="outline"></LuAvatar>
      </div>
      <div class="demo-block">
        <LuAvatar text="lu"></LuAvatar>
        <LuAvatar variant="filled" text="lu"></LuAvatar>
        <LuAvatar variant="outline" text="lu"></LuAvatar>
      </div>
      <div class="demo-block">
        <LuAvatar :disabled="true" text="lu"></LuAvatar>
      </div>
      <div class="demo-block">
        
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuAvatar from './Avatar.vue'
</script>

<style>
.demo-block {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
</style>
