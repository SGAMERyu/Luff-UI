<template>
<Story 
  title="Flex" 
  :layout="{
    type: 'grid'
    }">
      <Variant>
        <LuFlex>
          <div class="content"></div>
          <div class="content"></div>
          <div class="content"></div>
        </LuFlex>
      </Variant>
    </Story>
</template>

<script lang="ts" setup>
import LuFlex from '../src/Flex.vue'
</script>

<style scoped>
.content {
  width: 100%;
  height: 40px;
  min-height: '100%';
  background: #327dff;
}
</style>


