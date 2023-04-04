<template>
  <Story
    title="Avatar"
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
      <div class="demo-block demo-opacity-block">
        <LuAvatarSkeleton />
        <LuAvatarSkeleton appearance="square" />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuAvatar from '../src/Avatar.vue'
import LuTooltip from '~/components/tooltip'
import LuAvatarSkeleton from '../src/AvatarSkeleton.vue'

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

.demo-opacity-block {
  padding: 16px;
  background-image: linear-gradient(45deg, #f7f8f9, #f9f9fa 25%, transparent 25%),
    linear-gradient(135deg, #f7f8f9, #f9f9fa 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f7f8f9, #f9f9fa 75%),
    linear-gradient(135deg, transparent 75%, #f7f8f9, #f9f9fa 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
}
</style>
