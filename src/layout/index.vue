<template>
	<div class="layout-container">
		<div
			class="layput-sidebar"
			:class="{ collapseMenu: useLayOutSetting.collapseMenu }"
		>
			<Logo />
			<el-scrollbar class="scrollbar">
				<el-menu
					:router="true"
					:default-active="route.path"
					:collapse="useLayOutSetting.collapseMenu"
					:text-color="'var(--z-admin-layout-sidebar-color)'"
					:background-color="'var(--z-admin-layout-sidebar-bg)'"
				>
					<!-- active-text-color -->
					<MenuList :menuList="useUser.menuRoutes"
				/></el-menu>
			</el-scrollbar>
		</div>
		<div
			class="layput-tabbar"
			:class="{ collapseMenu: useLayOutSetting.collapseMenu }"
		>
			<Tabbar />
		</div>
		<div
			class="layput-main"
			:class="{ collapseMenu: useLayOutSetting.collapseMenu }"
		>
			<Main />
		</div>
	</div>
</template>

<script setup lang="ts" name="Layout">
import Logo from "./components/Logo/index.vue";
import MenuList from "./components/Menu/index.vue";
import Main from "./components/Main/index.vue";
import Tabbar from "./components/Tabbar/index.vue";
import { useUserStore } from "@/stores/user.ts";
import { useLayOutSettingStore } from "@/stores/layout-setting.ts";
let useLayOutSetting = useLayOutSettingStore();
// const useRouterList = useRouterListStore();
const useUser = useUserStore();
const route = useRoute();
</script>

<style scoped scss>
.layout-container {
	width: 100%;
	height: 100vh;
	.layput-sidebar {
		/* transition: all 0.3s; */
		width: var(--z-admin-layout-sidebar-width);
		background: var(--z-admin-layout-sidebar-bg);
		height: 100vh;
		color: var(--z-admin-layout-sidebar-color);
		.scrollbar {
			width: 100%;
			height: calc(100vh - var(--z-admin-layout-tabbar-height));
			.el-menu {
				border-right: none;
			}
		}
		&.collapseMenu {
			/* width: var(--z-admin-layout-sidebar-minwidth); */
		}
	}
	.layput-tabbar {
		transition: all 0.3s;
		width: calc(100% - var(--z-admin-layout-sidebar-width));
		height: var(--z-admin-layout-tabbar-height);
		position: fixed;
		top: 0;
		left: var(--z-admin-layout-sidebar-width);
		background: var(--z-admin-layout-tabbar-bg);
		&.collapseMenu {
			left: var(--z-admin-layout-sidebar-minwidth);
			width: calc(100% - var(--z-admin-layout-sidebar-minwidth));
		}
	}
	.layput-main {
		transition: all 0.3s;
		position: absolute;
		width: calc(100% - var(--z-admin-layout-sidebar-width));
		height: calc(100vh - var(--z-admin-layout-tabbar-height));
		background-color: chartreuse;
		right: 0;
		top: var(--z-admin-layout-tabbar-height);
		overflow: auto;
		&.collapseMenu {
			width: calc(100% - var(--z-admin-layout-sidebar-minwidth));
		}
	}
}
</style>
