<template>
	<el-config-provider
		:locale="locale"
		:size="SystemGlobalCONFIG.elementPlusSize"
	>
		<router-view></router-view>
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
