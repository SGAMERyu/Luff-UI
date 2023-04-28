<template>
  <component :is="as">
    <template v-for="(item, index) of highLightChunks" :key="index">
      <template v-if="item.isHighlighted">
          <Mark 
            :variant="variant" 
            :color="highlightColor" 
            :mark-style="highlightStyle">
            {{ item.chunk }}
          </Mark>
      </template>
      <template v-else>{{ item.chunk }}</template>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { highlightProps } from './highlight.type'
import Mark from '~/components/mark/src/Mark.vue'

defineOptions({ name: "LuHighlight" })
const props = defineProps(highlightProps)

const highLightChunks = computed(() => {
  return splitHighlightChunk(props.content, props.highlight, props.ignoreCase)
})

function splitHighlightChunk(content: string, highlight: string[], ignoreCase = false) {

   const matcher = highlight.filter((item) => item.trim().length !== 0).map((item) => item.trim()).join('|')
   const splitRe = new RegExp(`(${matcher})`, ignoreCase ? 'g' : 'gi');

   return content
    .split(splitRe)
    .map((part) => ({ chunk: part, isHighlighted: splitRe.test(part) }))
    .filter(({ chunk }) => chunk);
  }



</script>

<style lang="ts">
css({variants: {},'.lu-highlight': {}})
</style>
