import { ROUTER_LIST } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
interface UserData {
	token: string;
	userInfo: string;
}
export const useRouterList = defineStore(ROUTER_LIST, () => {
	const routerList = ref([]);
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
