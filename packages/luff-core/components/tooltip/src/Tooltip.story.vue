<template>
  <Story
    title="tooltip"
    :layout="{
      type: 'grid',
      width: '500px',
      height: '500px'
    }"
  >
    <Variant title="tooltip">
      <div class="demo-block">
        <LuTooltip content="hello world">
          <LuButton>Hover over me</LuButton>
        </LuTooltip>
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuTooltip from './Tooltip.vue'
import LuButton from '~/components/button'
</script>

<style>
.demo-block {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>
