<template>
  <div class="lu-image-root">
    <img
      v-if="src"
      v-bind="$attrs"
      class="lu-image"
      :src="src"
      :alt="alt"
      @error="onImageError"
      @load="onImageLoad"
      @click="onPreviewClick"
    />

    <template v-if="src">
      <slot v-if="$slots.caption" name="caption" />
      <span v-else-if="caption" class="lu-image-caption">
        {{ caption }}
      </span>
    </template>

    <template v-if="showPlaceholder || !src">
      <slot v-if="$slots.placeholder" name="placeholder" />
      <div v-else class="lu-image-placeholder">
        <ImagePlaceholder />
      </div>
    </template>

    <div v-if="showLoader && !isImageLoad" class="lu-image-loader">
      <LuLoader />
    </div>
    <template v-if="hasPreviewer">
      <ImageViewer v-model:visible="showViewer" :src="src"></ImageViewer>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { imageProps } from './image.type'
import { LuLoader } from '~/components/loader'
import ImagePlaceholder from './ImagePlaceholder.vue'
import ImageViewer from './ImageViewer.vue'

defineOptions({ name: 'LuImage' })
const props = defineProps({ ...imageProps })

const { showPlaceholder, isImageLoad, onImageError, onImageLoad } = useImage()
const { hasPreviewer, showViewer, onPreviewClick } = useImagePreviewer(isImageLoad)

function useImage() {
  const [showPlaceholder, toggleShowPlaceholder] = useToggle(false)
  const [isImageLoad, toggleIsImageLoad] = useToggle(false)

  function onImageLoad() {
    toggleIsImageLoad()
  }

  function onImageError() {
    toggleShowPlaceholder()
  }

  return { showPlaceholder, isImageLoad, toggleShowPlaceholder, onImageError, onImageLoad }
}

function useImagePreviewer(isImageLoad: Ref<boolean>) {
  const [showViewer, toggleViewerVisible] = useToggle(false)

  const hasPreviewer = computed(() => {
    return !!props.preview
  })

  function onPreviewClick() {
    if (!isImageLoad.value) return
    toggleViewerVisible()
  }

  return { showViewer, hasPreviewer, onPreviewClick }
}
</script>

<style lang="ts">
css({
  '.lu-image-root': {
    position: 'relative',
    display: 'inline-block',
    width: (props) => props.width,
    height: (props) => props.height,
    '& .lu-image': {
      width: '100%',
      height: '100%',
      objectFit: (props) => props.fit
    },
    '& .lu-image-caption': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '{fontSize.image.caption}',
      color: '{color.image.caption}'
    },
    '& .lu-image-loader': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& .lu-image-placeholder': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '{color.image.placeholder}',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
})
</style>
