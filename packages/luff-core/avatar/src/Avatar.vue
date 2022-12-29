<template>
    <div class="lu-avatar">
        <div class="lu-avatar__content" v-if="$slots.default">
            <slot>
                <LuffIcon><LuUserLine /></LuffIcon>
            </slot>
        </div>
        <img v-else :src="src" :alt="alt" class="lu-avatar__image">
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
            widht: '100%',
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
                    backgroundColor: (props) => variantTextColor(props)
                }
            },
            outline: {
                '&': {
                    color: (props) => variantTextColor(props),
                    border: (props) => variantBorderColor(props)
                }
            },
            light: {
                '&': {
                    color: (props) => variantTextColor(props, 500),
                    backgroundColor: (props) => variantTextColor(props),
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