<template>
  <h1>default</h1>
  <div class="demo-block">
    <LuBreadcrumbs :visible-items="2">
      <LuBreadcrumbsItem>Catalog</LuBreadcrumbsItem>
      <LuBreadcrumbsItem>Shoes</LuBreadcrumbsItem>
      <LuBreadcrumbsItem>Running</LuBreadcrumbsItem>
      <LuBreadcrumbsItem>Ultrashort</LuBreadcrumbsItem>
    </LuBreadcrumbs>
    <button @click="handleClick">test</button>
  </div>
</template>

<script lang="ts" setup>
const testVisibleItems = ref(0)

function handleClick() {
  testVisibleItems.value++
}
</script>
