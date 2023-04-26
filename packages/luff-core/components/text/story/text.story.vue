<template>
<Story 
    title="Text" 
    :layout="{
      type: 'grid'
      }">
        <Variant>
          <LuText size="xs">extra small text</LuText>
          <LuText size="sm">small text</LuText>
          <LuText>default text</LuText>
          <LuText size="lg">large text</LuText>
          <LuText size="xl">extra large text</LuText>
          <LuText :weight="700">700 text</LuText>
          <LuText weight="bold">bold large text</LuText>
          <LuText italic>italic text</LuText>
          <LuText color="green">italic text</LuText>
          <LuText color="green" align="center">italic text</LuText>
          <LuText  
            variant="gradient"
            :gradient="{ from: '#4c6ef5', to: '#15aabf', deg: '45deg' }">
            Indigo cyan gradient
          </LuText>
        </Variant>
      </Story>
</template>
<script lang="ts" setup>
import LuText from '../src/Text.vue'
</script>
