<template>
  <Story
    title="Grid"
    :layout="{
      type: 'grid',
      width: '500px'
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
  height: 46px;
}
</style>
