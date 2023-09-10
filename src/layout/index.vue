<template>
	<div class="h-full">
		<selection class="relative flex flex-col h-full">
			<template v-if="showTop">
				<div
					class="flex-shrink-0 h-[var(--z-admin-top-nav-height)] bg-red-200"
				>
					top
				</div>
			</template>
			<div class="flex flex-1">
				<template v-if="showSidebar">
					<div
						class="flex-shrink-0 bg-bule-200 w-220px"
						:class="[sideBarWidth]"
					>
						menu
					</div>
				</template>
				<main class="flex-1 bg-green-300">
					<section>
						<RouterView />
					</section>
				</main>
			</div>
		</selection>
	</div>
</template>

<script setup lang="ts">
import { useAppConfigStore } from "../stores/app-config";
const useAppConfig = useAppConfigStore();
// 顶部是否显示
const showTop = computed(() => {
	return ["onlyTopNav", "topSubSideNav"].includes(useAppConfig.getLayoutMode);
});
// 在顶部菜单布局的时候不显示侧边菜单栏
const showSidebar = computed(() => {
	return useAppConfig.getLayoutMode !== "onlyTopNav";
});
// 计算菜单栏的宽度
// 与模式和是否收缩有关，也与是否分主导航栏有关系
// 不显示的情况已经处理了，不需要考虑
const sideBarWidth = computed(() => {
	if (!useAppConfig.getNavCollapse) {
		// 侧边主导航+侧边次栏导航
		if (useAppConfig.getLayoutMode === "mainSubSideNav")
			return "w-[calc(var(--z-admin-main-sidebar-width)+var(--z-admin-sub-sidebar-width))]";

		return "w-[var(--z-admin-sub-sidebar-width)]";
	} else {
		if (useAppConfig.getLayoutMode === "mainSubSideNav")
			return "w-[calc(var(--z-admin-main-sidebar-width)+var(--z-admin-sub-sidebar-collapse-width))]";

		return "w-[var(--z-admin-sub-sidebar-collapse-width)]";
	}
});
</script>

<style></style>
