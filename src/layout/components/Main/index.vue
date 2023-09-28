<template>
	<!-- 路由组件出口的位置 -->
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<keep-alive :include="cachedViews" :max="10">
				<component v-if="flag" :is="Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<script setup lang="ts" name="Main">
import { useLayOutSettingStore } from "@/stores/layout-setting.ts";
let useLayOutSetting = useLayOutSettingStore();
const flag = ref(true);
const cachedViews = ref([]);
watch(
	() => useLayOutSetting.mainRefsh,
	() => {
		flag.value = false;
		nextTick(() => {
			flag.value = true;
		});
	}
);
</script>
<style lang="scss" scoped>
.fade-enter-from {
	opacity: 0;
	transform: scale(0);
}
.fade-enter-active {
	transition: all 0.3s;
}

.fade-enter-to {
	opacity: 1;
	transform: scale(1);
}
</style>
