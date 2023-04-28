<template>
  <Story 
    title="Highlight" 
    :layout="{
      type: 'grid'
    }">
      <Variant title="base">
        <LuHighlight :content="content" :highlight="['this']"></LuHighlight>
      </Variant>
      <Variant title="variant">
        <LuHighlight :content="content" :highlight="['this']" highlight-color="warning"></LuHighlight>
        <LuHighlight :content="content" :highlight="['this']" variant="border" highlight-color="danger"></LuHighlight>
        <LuHighlight :content="content" :highlight="['this']" variant="underline" highlight-color="primary"></LuHighlight>
      </Variant>
      <Variant title="custom">
        <LuHighlight
          content="You can change styles of highlighted part if you do not like default styles"
          :highlight="['highlighted', 'default']" 
          :highlight-style="{
            backgroundImage: 'linear-gradient(45deg, #4c6ef5 0%, #15aabf 100%)',
            fontWeight: 700,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }">
        </LuHighlight>
      </Variant>
  </Story>
</template>

<script lang="ts" setup>
import LuHighlight from '../src/Highlight.vue'

const content = ref('Highlight This, definitely THIS and also this!')
</script>
