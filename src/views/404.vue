<template>
	<div
		class="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-300"
	>
		<div
			class="bg-white rounded-md flex flex-col py-12 w-[500px] items-center justify-center"
		>
			<div class="font-bold text-purple-400 text-9xl">404</div>
			<div class="py-8 text-6xl font-medium">未找到页面</div>
			<div class="pb-8 text-2xl font-medium">您正在寻找的页面不存在</div>
			<div>
				<button
					class="px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-purple-200 to-blue-300 hover:from-pink-100 hover:to-orange-500"
				>
					<SvgIcon name="open" />{{ msg }}
				</button>
				<icon-accessibility />
				<icon-account-box style="font-size: 2em; color: red" />
				<i-ep:apple style="font-size: 2em; color: red" />
				<el-icon size="80">
					<SvgIcon color="#ff0000" name="circle-flags:ca-qc" />
				</el-icon>
				<el-pagination
					:page-sizes="[100, 200, 300, 400]"
					layout="sizes, prev, pager, next"
					:total="1000"
				/>
				<el-button mb-2 @click="toggle">Switch Language</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const msg = ref("首页");
import IconAccessibility from "~icons/carbon/accessibility";
import IconAccountBox from "~icons/mdi/account-box";
import { useAppConfigStore } from "../stores/app-config";
const useAppConfig = useAppConfigStore();
const toggle = () => {
	useAppConfig.setDefaultLanguage("en");
};
</script>

<style></style>
