<template>
	<div class="layout-container">
		<div class="layput-sidebar">
			<Logo />
			<el-scrollbar class="scrollbar">
				<el-menu
					:text-color="'var(--z-admin-layout-sidebar-color)'"
					:background-color="'var(--z-admin-layout-sidebar-bg)'"
				>
					<MenuList :menuList="useRouterList.getRouterList"
				/></el-menu>
			</el-scrollbar>
		</div>
		<div class="layput-tabbar"></div>
		<div class="layput-main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import Logo from "./components/logo/index.vue";
import MenuList from "./components/menu/index.vue";
import { useRouterListStore } from "@/stores/routes-list";
const useRouterList = useRouterListStore();
</script>

<style scoped scss>
.layout-container {
	width: 100%;
	height: 100vh;
	.layput-sidebar {
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
	}
	.layput-tabbar {
		width: calc(100% - var(--z-admin-layout-sidebar-width));
		height: var(--z-admin-layout-tabbar-height);
		position: fixed;
		top: 0;
		left: var(--z-admin-layout-sidebar-width);
		background: var(--z-admin-layout-tabbar-bg);
	}
	.layput-main {
		position: absolute;
		width: calc(100% - var(--z-admin-layout-sidebar-width));
		height: calc(100vh - var(--z-admin-layout-tabbar-height));
		background-color: chartreuse;
		right: 0;
		top: var(--z-admin-layout-tabbar-height);
		overflow: auto;
	}
}
</style>
