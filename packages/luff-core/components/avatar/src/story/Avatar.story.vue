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
        <LuAvatar :src="testSrc"></LuAvatar>
        <LuAvatar appearance="square" :src="testSrc"></LuAvatar>
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
        <LuAvatar text="lu" border-color="red" :src="testSrc"></LuAvatar>
      </div>
      <div class="demo-block">
        <LuTooltip content="cotton.qi(online)">
          <LuAvatar :disabled="true" text="lu" :src="testSrc" alt="cotton.qi(online)"></LuAvatar>
        </LuTooltip>
      </div>
      <div class="demo-block">
        <LuAvatar :src="testSrc" alt="cotton.qi(online)" size="xs" />
        <LuAvatar :src="testSrc" alt="cotton.qi(online)" size="sm" />
        <LuAvatar :src="testSrc" alt="cotton.qi(online)" />
        <LuAvatar :src="testSrc" alt="cotton.qi(online)" size="lg" />
        <LuAvatar :src="testSrc" alt="cotton.qi(online)" size="xl" />
      </div>
      <div class="demo-block">
        <LuAvatar :src="testErrorSrc" alt="cotton.qi(online)" text="lu" />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuAvatar from '../Avatar.vue'
import LuTooltip from '~/components/tooltip'

const testSrc =
  'https://images.generated.photos/UvsJo9W3Vwl2ohP4ybnwMQdreIrprQCnhcB-f9_j3Ko/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU0NjY3LmpwZw.jpg'
const testErrorSrc =
  'https://images.generated.photos/UvsJoW3Vwl2ohP4ybnwMQdreIrprQCnhcB-f9_j3Ko/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU0NjY3LmpwZw.jpg'
</script>

<style>
.demo-block {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
</style>
