<template>
    <Icon v-if="type === 'network'" :icon="name" :class="mergeClass" :style="customStyle" :animate="animate" />
    <svg v-else-if="type === 'local'" :class="['svg-icon', mergeClass]" :style="customStyle" aria-hidden="true">
        <use :href="`#icon-${name}`" />
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
        customClass?: string
        /** 提示文本 */
        title?: string
        /** 是否禁用 */
        disabled?: boolean
        /** 图标动画 type:network 下有效 */
        animate?: "spin" | "pulse" | "bounce" | "flip" | ""
        /** network：使用的@iconify/vue组件   local：使用本地svg图标,该模式下除了size color 外其他的样式属性不生效 */
        type?: "local" | "network"
    }>(),
    {
        size: "",
        color: "",
        customClass: "",
        disabled: false,
        animate: "",
        type: "network",
    },
)

// 合并类名：禁用状态
const mergeClass = computed(() =>
    [
        // 尺寸类（若为数字，转成固定尺寸；若为字符串，直接使用）
        // typeof props.size === "number" ? `w-${props.size} h-${props.size}` : "",
        // 禁用状态类
        props.disabled ? "opacity-50 cursor-not-allowed" : "",
        // 额外自定义类
        props.customClass,
    ]
        .filter(Boolean)
        .join(" "),
)
// 处理尺寸样式
const sizeStyle = computed(() => {
    if (!props.size) return {}
    return typeof props.size === "number" ? { width: `${props.size}px`, height: `${props.size}px` } : { width: props.size, height: props.size }
})
// 处理颜色样式
const customStyle = computed(() => ({
    // 如果你想优先用 props.color 就填 props.color，否则 undefined 让外部 class 生效
    color: props.color || undefined,
    ...sizeStyle.value,
}))
</script>
<style scoped lang="scss">
/* 强制让内部路径使用 currentColor（覆盖掉很多硬编码） */
.svg-icon,
.svg-icon * {
    fill: currentColor !important;
    stroke: currentColor !important;
}
</style>
