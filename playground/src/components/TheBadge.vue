<template>
  <h1>default</h1>
  <div class="demo-block text-24px">
    <LuBadge :content="9">
      <LuIcon>
        <LuClockwiseFill />
      </LuIcon>
    </LuBadge>
    <LuBadge :content="99">
      <LuButton> Button </LuButton>
    </LuBadge>
    <LuBadge content="999+">
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
  </div>
  <h1>placement</h1>
  <div class="demo-block">
    <LuBadge :content="9" placement="top-left">
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
    <LuBadge :content="9" placement="bottom-left">
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
    <LuBadge :content="9">
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
    <LuBadge :content="9" placement="bottom-right">
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
  </div>
  <h1>dot</h1>
  <div class="demo-block">
    <LuBadge :content="9" placement="top-left" dot>
      <LuAvatar src="https://avatars.githubusercontent.com/u/17926105?v=4"> </LuAvatar>
    </LuBadge>
  </div>
</template>

<script lang="ts" setup>
import { LuClockwiseFill } from '@luff-ui/icon'
</script>
