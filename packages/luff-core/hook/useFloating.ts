import {
  computePosition,
  ReferenceElement,
  flip,
  shift,
  offset,
  autoUpdate,
  Placement,
  DetectOverflowOptions,
  ShiftOptions
} from '@floating-ui/dom'

interface FloatingOptions {
  placement: Placement
  shiftOptions?: Partial<DetectOverflowOptions & ShiftOptions>
  offsetValue: number
}

export function useFloating(options: FloatingOptions) {
  const referenceRef = ref<ReferenceElement | undefined>(undefined)
  const floatingRef = ref<HTMLElement | undefined>(undefined)
  const [coordinate, setCoordinate] = createSignal({ x: 0, y: 0 })
  const { placement, shiftOptions, offsetValue } = options

  let cleanup: () => void = () => ({})

  onMounted(() => {
    cleanup = autoUpdate(referenceRef.value!, floatingRef.value!, updatePosition)
  })

  onUnmounted(() => {
    cleanup && cleanup()
  })

  function updatePosition() {
    computePosition(floatingRef.value!, floatingRef.value!, {
      placement,
      middleware: [offset(offsetValue), flip(), shift(shiftOptions)]
    })
      .then(({ x, y }) => {
        return setCoordinate({ x, y })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { coordinate, referenceRef, floatingRef }
}
