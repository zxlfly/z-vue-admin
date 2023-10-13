<template>
    <Icon v-if="name.includes(':')" class="svg-icon" :icon="name" />
    <!-- 这样属性可以透传下来，嵌套el-icon也可以正常设置属性 -->
    <svg v-else aria-hidden="true" class="svg-icon">
        <use :xlink:href="symbolId" />
    </svg>
</template>
<script setup lang="ts" name="SvgIcon">
import { Icon } from "@iconify/vue"
interface IProps {
    name: string
    prefix?: string
}

const props = withDefaults(defineProps<IProps>(), {
    prefix: "icon",
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
.svg-icon {
    vertical-align: -0.15em;
    fill: currentcolor;
    overflow: hidden;
}
</style>
