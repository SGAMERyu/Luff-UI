<template>
<Story 
    title="Stack" 
    :layout="{
        type: 'grid',
        width: '500px',
        height: '500px'
      }">
        <Variant>
          <LuStack height="400px">
            <div class="content">1</div>
            <div class="content">2</div>
            <div class="content">3</div>
          </LuStack>
        </Variant>
    </Story>
</template>

<script lang="ts" setup>
import LuStack from '../src/Stack.vue'
</script>

<style scoped>
.content {
  width: 100%;
  height: 40px;
  background: #327dff;
  color: white;
  text-align: center;
  line-height: 40px;
}
</style>
