<template>
<Story 
        title="Group" 
        :layout="{
          type: 'grid'
        }">
          <Variant>
            <LuGroup>
              <div class="content">1</div>
              <div class="content">2</div>
              <div class="content">3</div>
            </LuGroup>
          </Variant>
      </Story>
</template>

<script lang="ts" setup>
import LuGroup from '../src/Group.vue'
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
