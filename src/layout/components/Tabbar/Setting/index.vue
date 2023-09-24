<template>
	<el-button
		size="small"
		icon="Refresh"
		@click="updateRefsh"
		circle
	></el-button>
	<el-button
		size="small"
		icon="FullScreen"
		@click="fullScreen"
		circle
	></el-button>
	<el-button size="small" icon="Setting" circle></el-button>

	<!-- 下拉菜单 用户信息-->
	<el-dropdown>
		<span class="el-dropdown-link">
			<img
				:src="(useUser.userInfo && useUser.userInfo.avatar) || user"
				style="width: 24px; height: 24px; margin: 0px 10px"
			/>
			{{ (useUser.userInfo && useUser.userInfo.username) || "未登录" }}

			<el-icon class="el-icon--right">
				<arrow-down />
			</el-icon>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="toLogin" v-if="useUser.userInfo"
					>退出登陆</el-dropdown-item
				>
				<el-dropdown-item @click="toLogin" v-else
					>去登陆</el-dropdown-item
				>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts" name="Setting">
import { useLayOutSettingStore } from "@/stores/layout-setting.ts";
import { useUserStore } from "@/stores/user.ts";
import user from "@/assets/img/user.png";
const useUser = useUserStore();
let useLayOutSetting = useLayOutSettingStore();
const updateRefsh = () => {
	useLayOutSetting.mainRefsh = !useLayOutSetting.mainRefsh;
};
const fullScreen = () => {
	let full = document.fullscreenElement;
	if (!full) {
		document.documentElement.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
};
const toLogin = () => {
	useUser.loginOut();
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
	display: flex;
	align-items: center;
	margin: 0 5px;
}
:focus-visible {
	outline: none;
}
</style>
