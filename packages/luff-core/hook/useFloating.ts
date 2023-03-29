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

export function useFloating(
  referenceEl: Ref<ReferenceElement | undefined>,
  floatingEl: Ref<HTMLElement | undefined>,
  options: FloatingOptions
) {
  const [coordinate, setCoordinate] = createSignal({ x: 0, y: 0 })
  const { placement, shiftOptions, offsetValue } = options

  let cleanup: () => void = () => ({})

  onMounted(() => {
    cleanup = autoUpdate(referenceEl.value!, floatingEl.value!, updatePosition)
  })

  onUnmounted(() => {
    cleanup && cleanup()
  })

  function updatePosition() {
    computePosition(referenceEl.value!, floatingEl.value!, {
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

  watch(coordinate, () => {
    console.log(coordinate())
  })

  return { coordinate }
}
