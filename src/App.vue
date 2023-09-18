<template>
	<el-config-provider
		:locale="locale"
		:size="SystemGlobalCONFIG.elementPlusSize"
	>
		<router-view class="app-container" v-slot="{ Component, route }">
			<transition name="fade-transform" mode="out-in">
				<keep-alive :include="cachedViews" :max="10">
					<component :is="Component" :key="route.path" />
				</keep-alive>
			</transition>
		</router-view>
	</el-config-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import useElementI18n from "@/hooks/useElementI18n";
import SystemGlobalCONFIG from "@/app-config";
const cachedViews = ref([]);
let { locale } = useElementI18n();
</script>
<style scoped></style>
