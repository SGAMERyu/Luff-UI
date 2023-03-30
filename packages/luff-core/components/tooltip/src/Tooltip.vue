<template>
  <component :is="as" ref="referenceElRef" class="lu-tooltip" @mouseenter="setVisible()" @mouseleave="setVisible()">
    <slot></slot>
  </component>
  <Transition enter-active-class="lu-tooltip-animate-enter-active" leave-active-class="lu-tooltip-animate-leave-active">
    <Teleport to="body">
      <div v-show="visible" ref="floatingElRef" class="lu-tooltip__content lu-tooltip-animate" :style="floatingElStyle">
        <slot name="content">
          <template v-if="isComponent(content)">
            <component :is="content" />
          </template>
          <template v-else>{{ content }}</template>
        </slot>
      </div>
    </Teleport>
  </Transition>
</template>

<script lang="ts" setup>
import { isComponent } from '~/utils'
import { useFloating } from '~/hook'
import { tooltipProps } from './tooltip.type'
import { ReferenceElement } from '@floating-ui/dom'
import { CSSProperties } from 'vue'

defineOptions({ name: 'LuTooltip' })
const props = defineProps({ ...tooltipProps })

const referenceElRef = ref<ReferenceElement>()
const floatingElRef = ref<HTMLElement>()
const [visible, setVisible] = useToggle(false)

const { coordinate } = useFloating(referenceElRef, floatingElRef, {
  placement: props.placement,
  shiftOptions: {
    padding: props.padding
  },
  offsetValue: props.offset
})

const floatingElStyle = computed<CSSProperties>(() => {
  const { x, y } = coordinate()
  return {
    left: `${x}px`,
    top: `${y}px`
  }
})
</script>

<style lang="ts">
css({
  '.lu-tooltip': {
    '&__content': {
      position: 'absolute',
      width: 'max-content',
      color: '{color.tooltip.text}',
      background: '{color.tooltip.background}',
      padding: '{space.tooltip.padding}',
      borderRadius: '{radii.tooltip}'
    }
  },
  '.lu-tooltip-animate': {
    transition: '0.15s cubic-bezier(0.4,0,1,1);',
    transitionProperty: 'opacity,transform',
    '&-enter-active': {
      opacity: 0,
      transform: 'translateY(-8px)',
    },
    '&-leave-active': {
      opacity: 0,
      transform: 'translateY(-8px)'
    }
  },
})
</style>
