import { ROUTER_LIST } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
import { constantRoute, asyncRoute, anyRoute } from "@/router/routes";
import type { RouteRecordRaw } from "vue-router";

export const useRouterListStore = defineStore(ROUTER_LIST, () => {
	const routerList: Ref<RouteRecordRaw[]> = ref([
		...constantRoute,
		...asyncRoute,
		anyRoute,
	]);
	const getRouterList = computed(() => routerList.value);
	const setRouterList = (value: []) => {
		routerList.value = value;
	};
	const clearRouterList = () => {
		routerList.value = [];
	};

	return {
		getRouterList,
		setRouterList,
		clearRouterList,
	};
});
