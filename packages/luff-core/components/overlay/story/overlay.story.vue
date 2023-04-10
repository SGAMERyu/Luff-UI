<template>
  <Story
    title="Overlay"
    :layout="{
      type: 'grid',
      width: '500px'
    }"
  >
    <Variants title="overlay">
      <div class="demo-block">
        <img
          src="https://randompicturegenerator.com/img/cat-generator/gd07288fe3a30812e1f518f6313819ed2ba1588d45038c12953c844394c61598c0a5e7ffcb758a1d431dd87da1cdf3eff_640.jpg"
          alt=""
        />
        <Overlay />
      </div>
    </Variants>
  </Story>
</template>

<script lang="ts" setup>
import Overlay from '../src/Overlay.vue'
</script>

<style>
.demo-block {
  position: relative;
  width: 400px;
  height: 300px;
}

.demo-block img {
  width: 100%;
  height: 100%;
}
</style>
