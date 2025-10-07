<template>
    <div class="layout-page">
        <!-- 顶部导航 -->
        <div class="layout-header">header</div>
        <!-- 主体容器 -->
        <div class="layout-container">
            <!-- 左侧菜单 -->
            <div class="layout-slider">menu</div>
            <div class="layout-body">
                <!-- 内容展示区域 -->
                <el-scrollbar class="layout-main">
                    <div>
                        <p v-for="item in 200" :key="item" style="height: 40px; line-height: 40px; text-align: center">
                            {{ item }}
                        </p>
                    </div>
                </el-scrollbar>
                <!-- 底部 -->
                <div class="layout-footer">footer</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-page {
    background: var(--z-admin-layout-page-bg);
    height: 100vh;
    width: 100vw;

    .layout-header {
        background: var(--z-admin-layout-header-bg);
        box-shadow: 0 0 4px 1px #ccc;
        height: var(--z-admin-layout-header-height);
        position: sticky;
        z-index: 1;
    }

    .layout-container {
        background: var(--z-admin-layout-container-bg);
        display: flex;
        height: calc(100vh - var(--z-admin-layout-header-height));
        width: 100%;

        .layout-slider {
            background: var(--z-admin-layout-slider-bg);
            flex-shrink: 0;
            width: var(--z-admin-layout-slider-width);
        }

        .layout-body {
            flex: 1;

            .layout-main {
                background: var(--z-admin-layout-main-bg);
                height: calc(100vh - var(--z-admin-layout-header-height) - var(--z-admin-layout-footer-height) - var(--z-admin-module-margin) * 2);
                margin: var(--z-admin-module-margin);
                width: calc(100% - var(--z-admin-module-margin) * 2);
            }

            .layout-footer {
                background: var(--z-admin-layout-footer-bg);
                height: var(--z-admin-layout-footer-height);
            }
        }
    }
}
</style>
