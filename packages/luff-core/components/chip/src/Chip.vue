<template>
  <div class="lu-chip" @click="toggleChecked">
    <span v-if="prefixIcon || $slots.prefixIcon" class="lu-chip-prefix-icon">
      <slot name="prefixIcon">
        <LuffIcon>
          <Component :is="prefixIcon" />
        </LuffIcon>
      </slot>
    </span>
    <span><slot /></span>
  </div>
</template>

<script lang="ts" setup>
import { chipProps } from './Chip.type'
import LuffIcon from '~/components/icon'
import { getBorderColor, getColor } from '~/utils'

defineOptions({
  name: 'LuChip'
})

const props = defineProps({ ...chipProps, ...variants })
const emits = defineEmits<{
  (e: 'update:checked', val: boolean): void
}>()

const _checked = useVModel(props, 'checked', emits)

function toggleChecked() {
  const { disabled } = props
  if (disabled) return
  _checked.value = !_checked.value
}
</script>

<style lang="ts" setup>
css({
  '.lu-chip': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: (props) => `{size.chip.${props.size}}`,
    borderRadius: (props) => `{radii.chip.${props.radius}}`,
    padding: (props) => `0px {space.chip.${props.size}}`,
    cursor: 'pointer',
    '.lu-chip-prefix-icon': {
      fontSize: '18px',
      marginLeft: '-8px',
      marginRight: '8px'
    }
  },
  variants: {
    variant: {
      outline: {
        '&': {
          color: (props) =>  props.checked ? '{color.white}' : getColor(props.color),
          border: (props) => getBorderColor(props.color),
          backgroundColor: (props) => props.checked ? getColor(props.color) : 'transparent'
        },
      },
      light: {
        '&': {
          color: (props) => props.checked ? '{color.white}' : getColor(props.color),
          backgroundColor: (props) => getColor(props.color, props.checked ? 500 : 100)
        },
      },
      options: {
        default: 'light'
      }
    },
    disabled: {
      true: {
        '&': {
          color: '{color.textDisabled} !important',
          backgroundColor: '{color.disabled} !important',
          cursor: 'not-allowed',
        }
      },
      options: {
        default: false
      }
    },
  }
})
</style>
