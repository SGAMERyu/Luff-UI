<template>
  <Story
    title="Grid"
    :layout="{
      type: 'grid',
      width: '1200px'
    }"
  >
    <Variant title="base">
      <LuGrid gap="8px" :columns="3">
        <LuCell>
          <div class="content">width-1</div>
        </LuCell>
        <LuCell>
          <div class="content">width-2</div>
        </LuCell>
        <LuCell>
          <div class="content">width-3</div>
        </LuCell>
      </LuGrid>
    </Variant>
    <Variant>
      <LuGrid gap="8px" :columns="24">
        <LuCell :column="16">
          <div class="content">width-16</div>
        </LuCell>
        <LuCell :column="8">
          <div class="content">width-8</div>
        </LuCell>
      </LuGrid>
      <LuGrid gap="8px" :columns="24" style="margin-top: 16px">
        <LuCell :column="8">
          <div class="content">width-8</div>
        </LuCell>
        <LuCell :column="8">
          <div class="content">width-8</div>
        </LuCell>
        <LuCell :column="8">
          <div class="content">width-8</div>
        </LuCell>
      </LuGrid>
    </Variant>
    <Variant>
      <LuGrid gap="8px" columns="300px repeat(2, 1fr)">
        <LuCell :column="1" :row="2">
          <div class="content">width-1 height-2</div>
        </LuCell>
        <LuCell v-for="item in 4" :key="item">
          <div class="content">width-1</div>
        </LuCell>
      </LuGrid>
    </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuGrid from '../src/Grid.vue'
import LuCell from '../../cell/src/Cell.vue'
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3277ff;
  color: white;
  min-height: 46px;
  height: 100%;
}
</style>
