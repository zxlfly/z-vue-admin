import { loginApi } from "@/api/user";
import { USER } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
interface UserData {
	token: string;
	userInfo: string;
}
export const useUserStore = defineStore(USER, () => {
	// 读取缓存配置，如果存在就使用
	let res = LocalStorageService.get(USER) as UserData | null;
	const token = res ? ref(res.token) : ref("");
	const userInfo = res ? ref(res.userInfo) : ref("");
	const getToken = computed(() => token.value);
	// 登录
	function login() {
		return loginApi().then((res) => {
			token.value = res.result.token;
			userInfo.value = res.result.token;
			LocalStorageService.set(USER, {
				token: token.value,
				userInfo: userInfo.value,
			});
			return res;
		});
	}
	return {
		token,
		userInfo,
		getToken,
		login,
	};
});
