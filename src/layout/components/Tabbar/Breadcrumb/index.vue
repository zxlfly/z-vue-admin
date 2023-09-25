<template>
	<!-- 顶部左侧的图标 -->
	<el-icon
		style="margin-right: 10px"
		@click="useLayOutSetting.changeCollapseMenu"
	>
		<component
			:is="useLayOutSetting.collapseMenu ? 'Fold' : 'Expand'"
		></component>
	</el-icon>
	<!-- 左侧的面包屑 -->
	<el-breadcrumb separator="/" separator-icon="ArrowRight">
		<el-breadcrumb-item
			v-for="(item, index) in route.matched"
			:key="index"
			v-show="item.meta.title"
			:to="item.path"
		>
			<el-icon style="vertical-align: middle">
				<component :is="item.meta.icon"></component>
			</el-icon>
			<span style="margin: 0 5px; vertical-align: middle">
				{{ item.meta.title }}
			</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script setup lang="ts" name="BreadCrumb">
import { useLayOutSettingStore } from "@/stores/layout-setting.ts";
let useLayOutSetting = useLayOutSettingStore();
const route = useRoute();
</script>

<style lang="scss" scoped></style>
