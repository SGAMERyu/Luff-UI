import { Fn } from '@vueuse/core'
import { defu } from 'defu'

interface Position {
  x: number
  y: number
}

export interface UseMoveOptions {
  dir?: 'ltr' | 'rtl'
  onMove?: (position: Position) => void
  onEnd?: (position: Position) => void
}

const defaultMoveOptions: UseMoveOptions = {
  dir: 'ltr'
}

export function useMove(options: UseMoveOptions = defaultMoveOptions) {
  const { dir, onMove, onEnd } = defu(options, defaultMoveOptions)
  const wrapper = ref<HTMLElement | null>()
  const [isSliding, toggleIsSliding] = useToggle(false)
  const eventsListeners: Fn[] = []
  const framer = ref<number>(0)
  const position = ref({ x: 0, y: 0 })

  useEventListener(wrapper, 'mousedown', onMouseDown)

  function bindEvents() {
    const cleanupMove = useEventListener(document, 'mousemove', onMouseMove)
    const cleanupUp = useEventListener(document, 'mouseup', onMouseUp)
    eventsListeners.push(cleanupMove, cleanupUp)
  }

  function unBindEvents() {
    eventsListeners.forEach((clean) => clean())
  }

  function calcPosition({ clientX, clientY }: MouseEvent) {
    cancelAnimationFrame(framer.value)
    framer.value = requestAnimationFrame(() => {
      const rect = wrapper.value!.getBoundingClientRect()
      const { width, height, left, top } = rect
      if (width && height) {
        const x = clamp((clientX - left) / width, 0, 1)
        const y = clamp((clientY - top) / height, 0, 1)
        position.value = { x: dir === 'ltr' ? x : 1 - x, y }
        if (onMove && typeof onMove === 'function') onMove(position.value)
      }
    })
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max)
  }

  function onMouseMove(e: MouseEvent) {
    calcPosition(e)
  }

  function onMouseUp() {
    if (!isSliding.value) return
    toggleIsSliding(false)
    unBindEvents()
    if (onEnd && typeof onEnd === 'function') onEnd(position.value)
  }

  function onMouseDown(e: MouseEvent) {
    if (isSliding.value) return
    toggleIsSliding(true)
    e.preventDefault()
    bindEvents()
    onMouseMove(e)
  }

  return {
    wrapper,
    position
  }
}
