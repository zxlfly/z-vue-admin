<template>
	<div class="logo" v-if="SystemGlobalConfig.showLogo">
		<img :src="SystemGlobalConfig.logo" />
		<el-tooltip
			class="box-item"
			:content="SystemGlobalConfig.title"
			placement="top-start"
			:show-after="1000"
		>
			<!-- >v-show="!useLayOutSetting.collapseMenu" -->
			<div
				class="title"
				:style="{ opacity: !useLayOutSetting.collapseMenu ? 1 : 0 }"
			>
				{{ SystemGlobalConfig.title }}
			</div>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts" name="Logo">
import SystemGlobalConfig from "@/app-config";
import { useLayOutSettingStore } from "@/stores/layout-setting.ts";
let useLayOutSetting = useLayOutSettingStore();
</script>
<style lang="scss" scoped>
.logo {
	width: var(--z-admin-layout-sidebar-width);
	height: var(--z-admin-layout-tabbar-height);
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 10px;
	color: var(--z-admin-layout-logo-color);
	img {
		width: 40px;
		max-height: 100%;
		margin-right: 5px;
		flex-shrink: 0;
	}
	div {
		flex: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: var(--z-admin-layout-logo-fontsize);
	}
	.title {
		transition: all 0.3s;
	}
}
</style>
