import { CSSProperties } from 'vue'

export function useImageViewer(src: string) {
  const containerSize = {
    width: 0,
    height: 0
  }
  const naturalImageSize = ref({
    width: 0,
    height: 0
  })

  const footer = ref<HTMLElement | null>(null)

  const imageStyle = computed<CSSProperties>(() => {
    return createSizingImage()
  })

  function createSizingImage() {
    const { width: imageWidth, height: imageHeight } = naturalImageSize.value
    const { width: containerWidth, height: containerHeight } = containerSize
    const footerHeight = footer.value?.offsetHeight || 0
    const viewerWidth = containerWidth
    const viewerHeight = Math.max(containerHeight - footerHeight, footerHeight)
    const aspectRatio = imageWidth / imageHeight
    let width = viewerWidth
    let height = viewerHeight
    if (viewerHeight * aspectRatio > viewerWidth) {
      height = viewerWidth / aspectRatio
    } else {
      width = viewerHeight * aspectRatio
    }
    width = Math.min(width * 0.9, imageWidth)
    height = Math.min(height * 0.9, imageHeight)

    return {
      marginLeft: (viewerWidth - width) / 2 + 'px',
      marginTop: (viewerHeight - height) / 2 + 'px',
      width: width + 'px',
      height: height + 'px'
    }
  }

  function initContainerSize() {
    containerSize.width = window.innerWidth
    containerSize.height = window.innerHeight
  }

  function initImage() {
    const img = new Image()
    img.src = src
    img.onload = () => {
      naturalImageSize.value = {
        width: img.naturalWidth,
        height: img.naturalHeight
      }
    }
  }

  onMounted(() => {
    initContainerSize()
    initImage()
  })

  return { imageStyle, footer }
}
