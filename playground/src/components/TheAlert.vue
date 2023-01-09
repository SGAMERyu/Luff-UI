<template>
  <h1>variant</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
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
  </div>
  <h1>color</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
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
  </div>
  <h1>radius</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
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
  </div>
  <h1>icon</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <LuAlert :icon="LuStarLine" title="Bummer!"></LuAlert>
      <LuAlert :icon="LuStarLine" title="Bummer!">
        Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
      </LuAlert>
    </div>
  </div>
  <h1>toggle</h1>
  <div class="demo-block">
    <div class="w-400px flex flex-col gap-8px">
      <LuAlert v-model="visible" :icon="LuStarLine" title="Bummer!" show-close></LuAlert>
      <LuButton @click="toggleVisible()">toggle</LuButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LuStarLine } from '@luff-ui/icon'

const [visible, toggleVisible] = useToggle(true)
</script>
