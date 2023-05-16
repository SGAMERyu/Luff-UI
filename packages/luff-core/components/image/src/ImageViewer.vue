<template>
  <Teleport to="body">
    <div v-if="true" class="lu-image-viewer">
      <LuOverlay blur="15px" variant="image" :image="src"></LuOverlay>
      <div class="lu-image-container">
        <img :src="src" :style="{ ...imageStyle, ...imageTransformStyle }" />
      </div>
      <div ref="footer" class="lu-image-toolbar">
        <ul class="lu-image-toolList">
          <template v-for="tool in TOOL_BARS" :key="tool.action">
            <li class="lu-image-tool">
              <LuffIcon @click="onToolClick(tool.action)"> <component :is="tool.component"></component> </LuffIcon>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { LuOverlay } from '~/components/overlay'
import { ToolActionEnum, imageViewerProps } from './image.type'
import { useImageViewer } from './imageViewer'
import ZoomIn from './icon/ZoomIn.vue'
import ZoomOut from './icon/ZoomOut.vue'
import TurnRight from './icon/TurnRight.vue'
import TurnLeft from './icon/TurnLeft.vue'
import { LuffIcon } from '~/components/icon'

const TOOL_BARS = [
  { component: TurnLeft, action: ToolActionEnum.TURN_LEFT },
  { component: TurnRight, action: ToolActionEnum.TURN_RIGHT },
  { component: ZoomIn, action: ToolActionEnum.ZOOM_IN },
  { component: ZoomOut, action: ToolActionEnum.ZOOM_OUT }
]

defineOptions({
  name: 'luImageViewer'
})
const props = defineProps({ ...imageViewerProps })
// const visible = defineModel('visible', { type: Boolean, default: false })\

const { imageStyle, footer } = useImageViewer(props.src!)
const { imageTransformStyle, onToolClick } = useToolAction()

function useToolAction() {
  const scale = ref(1)
  const rotate = ref(0)
  const imageTransformStyle = computed(() => {
    return {
      transform: `scale(${scale.value}) rotate(${rotate.value}deg)`
    }
  })
  function onToolClick(action: ToolActionEnum) {
    switch (action) {
      case ToolActionEnum.ZOOM_IN:
        scale.value += 0.1
        break
      case ToolActionEnum.ZOOM_OUT:
        scale.value -= 0.1
        break
      case ToolActionEnum.TURN_LEFT:
        rotate.value -= 90
        break
      case ToolActionEnum.TURN_RIGHT:
        rotate.value += 90
        break
    }
  }
  return { imageTransformStyle, onToolClick }
}
</script>

<style lang="ts">
css({
  '.lu-image-viewer': {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    '& .lu-image-container': {
      position: 'relative',
      zIndex: 201,
    },
    '& .lu-image-toolbar': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      height: '48px',
      zIndex: 201,
    },
    '& .lu-image-toolList': {
      display: 'flex',
      gap: '8px',
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    '& .lu-image-tool': {
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '20px',
      color: '{color.white}',
      backgroundColor: '{color.black}',
      borderRadius: '50%',
    }
  },
})
</style>
