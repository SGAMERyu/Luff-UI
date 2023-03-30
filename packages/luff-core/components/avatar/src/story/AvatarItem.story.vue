<template>
  <Story
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant title="avatar-item">
      <AvatarItem background-color="pink">
        <template #avatar>
          <Avatar :src="testSrc"></Avatar>
        </template>
      </AvatarItem>
      <AvatarItem primary-text="cotton qi is online">
        <template #avatar>
          <Avatar :src="testSrc"></Avatar>
        </template>
      </AvatarItem>
      <AvatarItem secondary-text="Scott Farquhar">
        <template #avatar>
          <Avatar :src="testSrc"></Avatar>
        </template>
      </AvatarItem>
      <AvatarItem secondary-text="cotton.qi@example.com" primary-text="cotton CEO">
        <template #avatar>
          <Avatar :src="testSrc"></Avatar>
        </template>
      </AvatarItem>

      <div style="max-width: 100px">
        <AvatarItem secondary-text="cotton.qi@example.com" primary-text="cotton CEO">
          <template #avatar>
            <Avatar :src="testSrc"></Avatar>
          </template>
        </AvatarItem>
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import Avatar from '../Avatar.vue'
import AvatarItem from '../AvatarItem.vue'
AvatarItem

const testSrc =
  'https://images.generated.photos/UvsJo9W3Vwl2ohP4ybnwMQdreIrprQCnhcB-f9_j3Ko/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDU0NjY3LmpwZw.jpg'
</script>

<style>
.demo-avatar-item {
  display: flex;
}
</style>
