<template>
  <LuStyleButton v-bind="styleButtonProps" :css="{ ...styleButtonCss }">
    <span
      v-if="$slots.leftIcon || leftIcon || (loading && loadingPosition === 'left')"
      class="lu-btn-icon__left"
      :class="{ 'is-loading': loading }"
    >
      <slot name="leftIcon">
        <LuIcon>
          <Component :is="loading ? loadingIcon : leftIcon" />
        </LuIcon>
      </slot>
    </span>
    <span><slot /></span>
    <span
      v-if="$slots.rightIcon || rightIcon || (loading && loadingPosition === 'right')"
      class="lu-btn-icon__right"
      :class="{ 'is-loading': loading }"
    >
      <slot name="rightIcon">
        <LuIcon>
          <Component :is="loading ? loadingIcon : rightIcon" />
        </LuIcon>
      </slot>
    </span>
  </LuStyleButton>
</template>

<script lang="ts" setup>
import { buttonProps, buttonStyleProps } from './button.type'
import LuStyleButton from './StyleButton.vue'
import LuIcon from '~/icon'

defineOptions({
  name: 'LuButton'
})

const props = defineProps({ ...buttonProps, ...variants })

const styleButtonProps = computed(() => {
  const styleProps = {}
  Object.keys(buttonStyleProps).forEach((key) => {
    if (Reflect.has(props, key)) {
      Reflect.set(styleProps, key, props[key])
    }
  })

  return styleProps
})

const styleButtonCss = computed(() => {
  const { disabled } = props
  if (disabled) {
    return {
      color: '{color.textDisabled} !important',
      backgroundColor: '{color.disabled} !important',
      cursor: 'not-allowed',
      '&:hover': {
        color: '{color.text-disabled} !important',
        backgroundColor: '{color.disabled} !important'
      },
    }
  }
  return {}
})
</script>

<style>
@keyframes loadingRotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

<style lang="ts">
css({
  variants: {
    loading: {
      true: {
        '&': {
          pointerEvents: 'none'
        },
        '&::before': {
          display: '',
          content: '" "',
          position: 'absolute',
          inset: '-1px',
          backgroundColor: '{color.midOpacityWhite}',
          cursor: 'not-allowed'
        }
      },
      options: {
        default: false
      }
    },
  },
  '.lu-btn': {
    '&-icon__left': {
      marginRight: '{size.btnSpace.leftIcon}',
    },
    '&-icon__right': {
      marginLeft: '{size.btnSpace.rightIcon}'
    },
    '& .is-loading': {
      'animation': 'loadingRotate 2s linear infinite'
    }
  }
})
</style>
