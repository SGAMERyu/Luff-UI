<template>
  <h1>color</h1>
  <div class="demo-block">
    <LuChip color="primary">primary</LuChip>
    <LuChip color="success">success</LuChip>
    <LuChip color="info">info</LuChip>
    <LuChip color="warning">warning</LuChip>
    <LuChip color="danger">danger</LuChip>
  </div>
  <h1>variant</h1>
  <div class="demo-block">
    <LuChip variant="light">primary</LuChip>
    <LuChip variant="outline">primary</LuChip>
  </div>
  <h1>icon</h1>
  <div class="demo-block">
    <LuChip :prefix-icon="LuHeart2Fill">primary</LuChip>
    <LuChip :prefix-icon="LuStarFill">primary</LuChip>
    <LuChip :prefix-icon="LuAirplayFill">primary</LuChip>
  </div>
  <h1>disabled</h1>
  <div class="demo-block">
    <LuChip disabled>disabled</LuChip>
  </div>
  <h1>v-model</h1>
  <div class="demo-block">
    <LuChip v-model:checked="checked">{{ checked ? 'checked' : 'unchecked' }}</LuChip>
    <LuChip v-model:checked="checked" variant="outline">{{ checked ? 'checked' : 'unchecked' }}</LuChip>
  </div>
</template>

<script lang="ts" setup>
import { LuHeart2Fill, LuStarFill, LuAirplayFill } from '@luff-ui/icon'

const [checked, toggleChecked] = useToggle(false)
</script>
