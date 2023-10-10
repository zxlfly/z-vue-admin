<template>
    <div class="layout-page">
        <el-container class="layout-container">
            <el-header
                class="layput-tabbar"
                :class="{ collapseMenu: useLayOutSetting.collapseMenu }"
            >
                <Tabbar />
            </el-header>
            <el-container>
                <el-aside
                    class="layout-sidebar"
                    :class="{ collapseMenu: useLayOutSetting.collapseMenu }"
                >
                    <el-scrollbar class="scrollbar">
                        <el-menu
                            :router="true"
                            :default-active="route.path"
                            :collapse="useLayOutSetting.collapseMenu"
                            :text-color="'var(--z-admin-layout-sidebar-color)'"
                            :background-color="'var(--z-admin-layout-sidebar-bg)'"
                        >
                            <MenuList :menuList="useUser.menuRoutes" />
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-container
                    class="layout-main"
                    :class="{ collapseMenu: useLayOutSetting.collapseMenu }"
                >
                    <el-main class="layout-main-card"><Main /></el-main>
                    <el-footer
                        class="layput-credits"
                        :class="{ collapseMenu: useLayOutSetting.collapseMenu }"
                    >
                        <Credits />
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts" name="Layout">
import MenuList from "./components/Menu/index.vue"
import Main from "./components/Main/index.vue"
import Tabbar from "./components/Tabbar/index.vue"
import Credits from "./components/Credits/index.vue"
import { useUserStore } from "@/stores/user.ts"
import { useLayOutSettingStore } from "@/stores/layout-setting.ts"
let useLayOutSetting = useLayOutSettingStore()
// const useRouterList = useRouterListStore();
const useUser = useUserStore()
const route = useRoute()
</script>

<style scoped scss>
.layout-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .layout-container {
        flex: 1 1 0%;

        .layput-tabbar {
            box-shadow: 0 4px 6px #0003;
            z-index: 100;
            transition: all var(--z-admin-layout-transition-duration);
            width: 100%;
            height: var(--z-admin-layout-tabbar-height);

            /* background: var(--z-admin-layout-tabbar-bg); */

            /* &.collapseMenu {
            } */
        }

        .layout-sidebar {
            transition: all var(--z-admin-layout-transition-duration);
            width: var(--z-admin-layout-sidebar-width);
            background: var(--z-admin-layout-sidebar-bg);
            color: var(--z-admin-layout-sidebar-color);
            box-shadow: 0 4px 12px #0000001a;
            z-index: 99;

            .scrollbar {
                width: 100%;
                padding-top: 10px;
                height: calc(100vh - var(--z-admin-layout-tabbar-height));

                .el-menu {
                    border-right: none;
                }
            }

            &.collapseMenu {
                width: var(--z-admin-layout-sidebar-minwidth);
            }
        }

        .layout-main {
            transition: all var(--z-admin-layout-transition-duration);
            width: calc(100% - var(--z-admin-layout-sidebar-width));
            height: calc(100vh - var(--z-admin-layout-tabbar-height));
            overflow: visible;

            &.collapseMenu {
                width: calc(100% - var(--z-admin-layout-sidebar-minwidth));
            }

            .layout-main-card {
                height: calc(100% - var(--z-admin-layput-credits-height));
                margin: var(--z-admin-layout-main-margin);

                .layout-main-card-scrollbar {
                    height: calc(
                        100vh - var(--z-admin-layput-credits-height) -
                            var(--z-admin-layout-tabbar-height) -
                            var(--z-admin-layout-main-margin) -
                            var(--z-admin-layout-main-margin)
                    );
                }
            }

            .layput-credits {
                transition: all var(--z-admin-layout-transition-duration);

                /* 如果需要一直居中就打开 */

                /* width: calc(100% - var(--z-admin-layout-sidebar-width)); */
                height: var(--z-admin-layput-credits-height);
                display: flex;
                align-items: center;
                justify-content: center;

                &.collapseMenu {
                    width: calc(100% - var(--z-admin-layout-sidebar-minwidth));
                }
            }
        }
    }
}
</style>
