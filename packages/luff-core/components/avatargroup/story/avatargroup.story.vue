<template>
  <Story
    title="AvatarGroup"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant title="avatar-group">
      <div class="demo-block">
        <LuAvatarGroup :data="data" />
        <LuAvatarGroup :data="data" appearance="grid" />
        <LuAvatarGroup :data="data" :max-count="7" appearance="grid" />
        <LuAvatarGroup :data="data" border-color="red" />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuAvatarGroup from '../src/AvatarGroup.vue'

const range = 10
const imgList = []

for (let i = 0; i < range; i++) {
  imgList.push({
    name: 'test',
    src: `https://randomuser.me/api/portraits/women/${i}.jpg`
  })
}

const data = shallowRef(imgList)
</script>

<style scoped>
.demo-block ul {
  margin-bottom: 10px;
}
</style>
