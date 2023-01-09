<template>
  <div class="lu-avatar">
    <div v-if="$slots.default" class="lu-avatar__content">
      <slot>
        <LuffIcon><LuUserLine /></LuffIcon>
      </slot>
    </div>
    <img v-else :src="src" :alt="alt" class="lu-avatar__image" />
  </div>
</template>

<script lang="ts" setup>
import { avatarProps } from './avatar.type'
import { LuUserLine } from '@luff-ui/icon'
import { LuffIcon } from '~/icon'

defineProps({ ...avatarProps, ...variants })
</script>

<style lang="ts">
css({
    '.lu-avatar': {
        display: 'block',
        '&__content': {
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
        },
        '&__image': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
        }
    },
    variants: {
        variant: {
            filled: {
                '&': {
                    color: '{color.white}',
                    backgroundColor: (props) => variantColor(props.color)
                }
            },
            outline: {
                '&': {
                    color: (props) => variantColor(props.color),
                    border: (props) => variantBorderColor(props.color)
                }
            },
            light: {
                '&': {
                    color: (props) => variantColor(props.color, 500),
                    backgroundColor: (props) => variantColor(props.color),
                }
            }
        },
        size: {
            xs: {
                '&': {
                    avatarSize: 'xs'
                }
            },
            sm: {
                '&': {
                    avatarSize: 'sm'
                }
            },
            md: {
                '&': {
                    avatarSize: 'md'
                }
            },
            lg: {
                '&': {
                    avatarSize: 'lg'
                }
            },
            xl: {
                '&': {
                    avatarSize: 'xl'
                }
            },
        }
    }
})
</style>
