<template>
  <div class="demo" :style="demoStyle">
    <div>
      <legend>default</legend>
      <span
        >You have wakened not out of sleep, but into a prior dream, and that dream lies within another, and so on, to
        infinity, which is the number of grains of sand. The path that you are to take is endless, and you will die
        before you have truly awakened.</span
      >
    </div>
    <div>
      <legend>with balancer</legend>
      <LuBalancer
        >You have wakened not out of sleep, but into a prior dream, and that dream lies within another, and so on, to
        infinity, which is the number of grains of sand. The path that you are to take is endless, and you will die
        before you have truly awakened.</LuBalancer
      >
    </div>
  </div>
  <input type="range" defaultValue="55" class="demo-range" @change="onChange" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const width = ref(0)
function onChange(event: Event) {
  width.value = (event.target as any).value / 100
}

const demoStyle = computed(() => {
  return {
    width: `calc(${width.value} * min(27.5vw,480px) + 320px)`
  }
})
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 8%), 0 3px 10px -6px rgb(0 0 0 / 10%);
  text-align: center;
  & > div {
    flex: 1;
  }
}

.demo-range {
  margin-top: 10px;
}
</style>
