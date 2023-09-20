import { loginApi, type UserLoginData } from "@/api/user";
import { USER } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
// interface UserData {
// 	token: string;
// 	userInfo: string;
// 	role: string;
// }

export const useUserStore = defineStore(USER, () => {
	// 读取缓存配置，如果存在就使用
	let res = LocalStorageService.get(USER) as UserLoginData | null;
	const userInfo = res ? ref(res) : ref(null);
	const getToken = computed(() => userInfo.value?.token);
	// 登录
	function login() {
		return loginApi().then((res) => {
			userInfo.value = res.result;
			LocalStorageService.set(USER, {
				...res.result,
			});
			return res;
		});
	}
	// 退出登录
	function loginOut() {
		LocalStorageService.remove(USER);
	}
	console.log("userInfo", userInfo.value);

	return {
		loginOut,
		userInfo,
		getToken,
		login,
	};
});
