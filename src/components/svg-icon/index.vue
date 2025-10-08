<template>
    <Icon v-if="type === 'network'" :icon="name" :class="mergeClass" :style="customStyle" :animate="animate" />
    <svg v-else :class="mergeClass" :style="customStyle" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`" :fill="color" />
    </svg>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { computed } from "vue"

const props = withDefaults(
    defineProps<{
        /** 图标名（需带对应的前缀，如 "ep:home"） */
        name: string
        /** 尺寸（支持数字/字符串，如 24、"24px"） */
        size?: number | string
        /** 颜色（如 "#f00"、"text-red-500"） */
        color?: string
        /** 额外类名 ,优先级低*/
        class?: string
        /** 提示文本 */
        title?: string
        /** 是否禁用 */
        disabled?: boolean
        /** 图标动画 type:network 下有效 */
        animate?: "spin" | "pulse" | "bounce" | "flip" | ""
        /** network：使用的@iconify/vue组件   local：使用本地svg图标 */
        type?: "local" | "network"
    }>(),
    {
        size: "",
        color: "",
        class: "",
        disabled: false,
        animate: "",
        type: "network",
    },
)

// 合并类名：处理尺寸、禁用状态
const mergeClass = computed(() =>
    [
        // 尺寸类（若为数字，转成固定尺寸；若为字符串，直接使用）
        typeof props.size === "number" ? `w-${props.size} h-${props.size}` : "",
        // 禁用状态类
        props.disabled ? "opacity-50 cursor-not-allowed" : "",
        // 额外自定义类
        props.class,
    ]
        .filter(Boolean)
        .join(" "),
)

// 处理颜色样式
const customStyle = computed(() => ({
    color: props.color,
    // 若尺寸是字符串（如 "1.5em"），通过 style 控制（避免类名不生效）
    ...(typeof props.size === "string" ? { width: props.size, height: props.size } : {}),
}))
</script>
<style scoped lang="scss"></style>
