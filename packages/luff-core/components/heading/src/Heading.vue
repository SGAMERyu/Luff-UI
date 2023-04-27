<template>
  <component :is="headingLevel" class="lu-heding"></component>
</template>

<script lang="ts" setup>
import { headingProps } from './heading.type'
import { getColor } from '~/utils'

defineOptions({ name: "LuHeading" })

const props = defineProps({ ...headingProps })

const headingLevel = computed(() => {
  return `h${props.level}`
})
</script>

<style lang="ts">
css({
    variants: {
      truncate: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }
    },
    '.lu-heading': {
      textAlign: (props) => props.align,
      fontSize: (props) => props.size || `{fontSize.heading.level${props.level}}`,
      fontWeight: (props) => props.weight,
      fontStyle: (props) => props.italic ? 'italic' : 'normal',
      color: (props) => getColor(props.color, 500),
  }
})
</style>
