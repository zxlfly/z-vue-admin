import { ROUTER_LIST } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
import { staticRoutes } from "@/router/static-routes";
import type { RouteRecordRaw } from "vue-router";

interface UserData {
	token: string;
	userInfo: string;
}
export const useRouterListStore = defineStore(ROUTER_LIST, () => {
	const routerList: Ref<RouteRecordRaw[]> = ref([...staticRoutes]);
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
