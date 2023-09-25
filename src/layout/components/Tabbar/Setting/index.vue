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

	<!-- <el-popover
		placement="bottom"
		title="主题设置"
		:width="250"
		trigger="focus"
	>
		
		<template #reference>
			
		</template>
	</el-popover> -->
	<el-button
		@click="drawer = !drawer"
		size="small"
		icon="Setting"
		circle
	></el-button>
	<el-drawer v-model="drawer" title="主题设置" direction="rtl">
		<el-form class="demo-form-inline">
			<el-form-item label="主题颜色">
				<el-color-picker
					v-model="color"
					show-alpha
					:predefine="predefineColors"
					@change="setColor"
				/>
			</el-form-item>
			<el-form-item label="暗黑模式">
				<el-switch
					v-model="dark"
					class="mt-2"
					style="margin-left: 24px"
					inline-prompt
					active-icon="MoonNight"
					inactive-icon="Sunny"
					@change="changeDark"
				/>
			</el-form-item>
		</el-form>
	</el-drawer>
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
				<el-dropdown-item @click="toLogin" v-if="useUser.userInfo">
					退出登陆
				</el-dropdown-item>
				<el-dropdown-item @click="toLogin" v-else>
					去登陆
				</el-dropdown-item>
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
const drawer = ref(false);
// 暗黑模式
const dark = ref(false);
const changeDark = () => {
	let html = document.documentElement;
	dark.value ? (html.className = "dark") : (html.className = "light");
};
//主题颜色的设置
const color = ref("rgba(255, 69, 0, 0.68)");
const predefineColors = ref([
	"#ff4500",
	"#ff8c00",
	"#ffd700",
	"#90ee90",
	"#00ced1",
	"#1e90ff",
	"#c71585",
	"rgba(255, 69, 0, 0.68)",
	"rgb(255, 120, 0)",
	"hsv(51, 100, 98)",
	"hsva(120, 40, 94, 0.5)",
	"hsl(181, 100%, 37%)",
	"hsla(209, 100%, 56%, 0.73)",
	"#c7158577",
]);
const setColor = () => {
	//通知js修改根节点的样式对象的属性与属性值
	const html = document.documentElement;
	html.style.setProperty("--el-color-primary", color.value);
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
