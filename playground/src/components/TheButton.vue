<template>
  <h2>color</h2>
  <div class="demo-block">
    <LuButton color="primary">primary</LuButton>
    <LuButton color="danger">danger</LuButton>
    <LuButton color="success">success</LuButton>
    <LuButton color="warning">warning</LuButton>
    <LuButton color="info">info</LuButton>
  </div>
  <h2>variant</h2>
  <div class="demo-block">
    <LuButton color="primary">primary</LuButton>
    <LuButton color="primary" variant="light">danger</LuButton>
    <LuButton color="primary" variant="outline">success</LuButton>
    <LuButton color="primary" variant="subtle">warning</LuButton>
    <LuButton color="primary" variant="default">info</LuButton>
    <LuButton color="primary" variant="white">info</LuButton>
  </div>
  <h2>Size</h2>
  <div class="demo-block">
    <LuButton color="primary" size="xs">Settings</LuButton>
    <LuButton color="primary" size="sm">Settings</LuButton>
    <LuButton color="primary" size="md">Settings</LuButton>
    <LuButton color="primary" size="lg">Settings</LuButton>
    <LuButton color="primary" size="xl">Settings</LuButton>
  </div>
  <h2>roundend</h2>
  <div class="demo-block">
    <LuButton color="primary" radius="xs">Settings</LuButton>
    <LuButton color="primary" radius="sm">Settings</LuButton>
    <LuButton color="primary" radius="md">Settings</LuButton>
    <LuButton color="primary" radius="lg">Settings</LuButton>
    <LuButton color="primary" radius="xl">Settings</LuButton>
  </div>
  <h2>loading</h2>
  <div class="demo-block">
    <LuButton color="primary" loading>Settings</LuButton>
    <LuButton color="primary" loading loadingPosition="right">Settings</LuButton>
    <LuButton color="primary" :leftIcon="Lu24HoursFill">Settings</LuButton>
    <LuButton color="primary" :rightIcon="Lu24HoursFill">Settings</LuButton>
  </div>
  <h2>disabled</h2>
  <div class="demo-block">
    <LuButton disabled>Settings</LuButton>
  </div>
</template>

<script lang="ts" setup>
import { Lu24HoursFill } from '@luff-ui/icon'
</script>
