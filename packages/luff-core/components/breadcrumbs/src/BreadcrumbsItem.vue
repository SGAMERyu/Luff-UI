<template>
  <template v-if="isWithInInterval">
    <li v-if="itemIndex === 1" class="lu-breadcrumbs-item">
      <span class="lu-breadcrumbs-inner lu-breadcrumbs-more" @click="handleExpand">
        <LuffIcon><LuMoreFill /></LuffIcon>
      </span>
      <span class="lu-breadcrumbs-separator">
        <template v-if="isComponent(separator)">
          <Component :is="separator" />
        </template>
        <template v-else>{{ separator }}</template>
      </span>
    </li>
  </template>
  <li v-else class="lu-breadcrumbs-item">
    <span class="lu-breadcrumbs-inner" @click="handleClick">
      <span v-if="icon || $slots.icon"
        ><slot name="icon"> <Component :is="icon" /> </slot
      ></span>
      <span><slot></slot></span>
    </span>
    <span class="lu-breadcrumbs-separator">
      <template v-if="isComponent(separator)">
        <Component :is="separator" />
      </template>
      <template v-else>{{ separator }}</template>
    </span>
  </li>
</template>

<script lang="ts" setup>
import { isComponent } from '~/utils'
import { breadcrumbsInjectionKey, breadcrumbsItemProps } from './breadcrumbs.type'
import LuffIcon from '~/components/icon'
import { LuMoreFill } from '@luff-ui/icon'

defineOptions({
  name: 'LuBreadcrumbsItem'
})

const props = defineProps({ ...breadcrumbsItemProps, ...variants })

const instance = getCurrentInstance()
const router = instance?.appContext.config.globalProperties.$router

const LuBreadcrumbs = inject(breadcrumbsInjectionKey, null)
const itemIndex = ref(-1)
itemIndex.value = LuBreadcrumbs?.trackItems() ?? -1

const isWithInInterval = computed(() => {
  const [startIndex, endIndex] = unref(LuBreadcrumbs?.overFlowIndexInterval) ?? [-1, -1]
  return itemIndex.value > 0 && itemIndex.value >= startIndex && itemIndex.value <= endIndex
})

const separator = computed(() => {
  return unref(props.separator || LuBreadcrumbs?.separator)
})

function handleClick() {
  const { href, replace } = props
  if (!href) return
  replace ? router?.replace(href) : router?.push(href)
}

function handleExpand() {
  LuBreadcrumbs?.expandAllItems()
}
</script>

<style lang="ts">
css({
  variants: {
    disabled: {
      true: {
        '&': {
          color: '{color.textDisabled}'
        }
      },
      options: {
        default: false
      }
    }
  },
  '.lu-breadcrumbs-item': {
    display: 'flex',
    alignItems: 'center',
    "&:last-child": {
      '.lu-breadcrumbs-separator': {
        display: 'none',
      }
    },
    '.lu-breadcrumbs-inner': {
      display: 'flex',
      cursor: 'pointer'
    },
    '.lu-breadcrumbs-separator': {
      display: 'flex',
      margin: '0px 4px'
    }
  },
  '.lu-breadcrumbs-more': {
    cursor: 'pointer',
    '&:hover': {
      background: 'red'
    }
  }
})
</style>
