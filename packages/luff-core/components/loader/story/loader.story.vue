<template>
  <Story 
    title="Loader" 
    :layout="{
      type: 'grid',
      height: '500px'
    }">
        <Variant>
          <LuLoader />
        </Variant>
  </Story>
</template>
<script lang="ts" setup>
import LuLoader from '../src/Loader.vue'
</script>
