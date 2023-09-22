<template>
	<template v-for="item in menuList" :key="item.path">
		<!-- 没有子路由 -->
		<template v-if="!item.children">
			<el-menu-item v-if="!item.meta?.hideInMenu" :index="item.path">
				<el-icon v-if="item.meta?.icon">
					<component :is="item.meta.icon"></component>
				</el-icon>
				{{ item.meta?.title ?? "" }}
			</el-menu-item>
		</template>
		<!-- 只有一个子路由 -->
		<el-menu-item
			v-else-if="item.children && item.children.length == 1"
			:index="item.children[0].path"
		>
			<el-icon v-if="item.children[0].meta?.icon">
				<component :is="item.children[0].meta.icon"></component>
			</el-icon>
			{{ item.children[0].meta?.title ?? "" }}
		</el-menu-item>
		<!-- 有多个 -->
		<template v-else>
			<el-sub-menu v-if="!item.meta?.hideInMenu" :index="item.path">
				<template #title>
					<el-icon v-if="item.meta?.icon">
						<component :is="item.meta.icon"></component>
					</el-icon>
					{{ item.meta?.title ?? "" }}
				</template>
				<MenuList
					v-if="item.children && item.children.length > 1"
					:menuList="item.children"
				/>
			</el-sub-menu>
		</template>
	</template>
</template>

<script setup lang="ts" name="MenuList">
import type { RouteRecordRaw } from "vue-router";

defineProps({
	menuList: {
		require: true,
		type: Array<RouteRecordRaw>,
	},
});
</script>

<style scoped scss></style>
