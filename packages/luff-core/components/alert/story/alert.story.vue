<template>
  <Story title="Alert">
    <Variant title="alert">
      <div class="demo-block">
        <LuAlert title="Bummer!">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" variant="light">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" variant="outline">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
      </div>
    </Variant>
    <Variant title="alert-color">
      <div class="demo-block">
        <LuAlert title="Bummer!">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" color="danger">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" color="warning">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" color="info">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" color="success">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
      </div>
    </Variant>
    <Variant title="alert-radius">
      <div class="demo-block">
        <LuAlert title="Bummer!" radius="xs">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" radius="sm">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" radius="md">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" radius="xl">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" radius="lg">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert title="Bummer!" radius="xs"></LuAlert>
        <LuAlert title="Bummer!" radius="sm"></LuAlert>
        <LuAlert title="Bummer!" radius="md"></LuAlert>
        <LuAlert title="Bummer!" radius="lg"></LuAlert>
        <LuAlert title="Bummer!" radius="xl"></LuAlert>
      </div>
    </Variant>
    <Variant title="alert-other">
      <div class="demo-block">
        <LuAlert :icon="LuStarLine" title="Bummer!"></LuAlert>
        <LuAlert :icon="LuStarLine" title="Bummer!">
          Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
        </LuAlert>
        <LuAlert v-model="visible" :icon="LuStarLine" title="Bummer!" show-close></LuAlert>
        <LuButton @click="toggleVisible()">toggle</LuButton>
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { LuStarLine } from '@luff-ui/icon'
import LuAlert from '../src/Alert.vue'

const [visible, toggleVisible] = useToggle(true)
</script>

<style scoped>
.demo-block {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
</style>
