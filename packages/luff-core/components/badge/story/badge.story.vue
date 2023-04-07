<template>
  <Story
    title="Badge"
    :layout="{
      type: 'grid',
      width: '500px',
      minHeight: '500px'
    }"
  >
    <Variant title="badge">
      <div class="demo-block">
        <LuBadge :count="10" color="danger">
          <LuffAvatar :src="testSrc"></LuffAvatar>
        </LuBadge>
        <LuBadge :count="10" color="danger" dot>
          <LuffAvatar :src="testSrc"></LuffAvatar>
        </LuBadge>

        <LuBadge :count="10000" color="danger" :max="99">
          <LuffAvatar :src="testSrc"></LuffAvatar>
        </LuBadge>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import LuBadge from '../src/Badge.vue'
import LuffAvatar from '~/components/avatar'

const testSrc =
  'https://images.generated.photos/UvsJo9W3Vwl2ohP4ybnwMQdreIrprQCnhcB-f9_j3Ko/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU0NjY3LmpwZw.jpg'
</script>

<style>
.demo-block {
  display: flex;
  gap: 8px;
  align-items: center;
  height: 40px;
}
</style>
