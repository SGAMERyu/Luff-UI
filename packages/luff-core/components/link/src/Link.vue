<template>
  <component :is="as" class="lu-link" @click="handleClick">
    <span><slot></slot></span>
  </component>
</template>

<script lang="ts" setup>
import { getColor } from '~/utils'
import { linkProps } from './link.type'

defineOptions({ name: "LuLink" })
const props = defineProps({ ...linkProps })

const router = getCurrentInstance()?.proxy?.$router;

function handleClick() {
  if (!props.href) return
  router ? router.push(props.href) : window.open(props.href)
}
</script>

<style lang="ts">
css({
  variants: {
    variant: {
      text: {
        '&': {
          'textDecoration': 'none'
        }
      },
      underline: {
        '&:hover': {
          'textDecoration': (props) => `${getColor(props.color)} underline`
        }
      },
      hover: {
        '&:hover': {
          background: '{color.gray.100}'
        }
      }
    },
  },
  '.lu-link': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '{space.link.padding}',
    cursor: (props) => props.disabled ? 'not-allowed' : 'pointer',
    color: (props) => props.disabled ? '{color.gray.200}' : getColor(props.color),
  }
})
</style>
