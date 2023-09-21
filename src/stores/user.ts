import {
	loginApi,
	getUserInfo,
	type UserLogin,
	type UserLoginInfo,
} from "@/api/user";
import { USER, TOKEN } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";
// interface UserData {
// 	token: string;
// 	userInfo: string;
// 	role: string;
// }

export const useUserStore = defineStore(USER, () => {
	const router = useRouter();
	// 读取缓存配置，如果存在就使用
	let res = LocalStorageService.get(USER) as UserLoginInfo | null;
	const userInfo = res ? ref(res) : ref(null);
	const getToken = computed(() => userInfo.value?.token);
	// 登录
	async function login(userName: string, password: string) {
		try {
			let res = await loginApi(userName, password);
			console.log("res", res);
			if (res.code == 200) {
				LocalStorageService.set(TOKEN, res.data.token);
				// router.push("/");
				let info = await getUser();
				console.log("info", info);
				ElNotification({
					title: "欢迎回来！",
					type: "success",
					message: "登录成功",
				});
			} else {
				ElNotification({
					type: "warning",
					message: res.data.message,
				});
			}
			return res;
		} catch (error) {
			console.log(error);
			ElNotification({
				type: "error",
				message: (error as Error).message,
			});
			return error;
		}
	}
	//获取用户信息
	async function getUser() {
		try {
			let res = await getUserInfo();
			console.log("res", res);
			if (res.code == 200) {
				// router.push("/");
			} else {
				// ElNotification({
				// 	type: "warning",
				// });
			}
		} catch (error) {
			console.log(error);
		}
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
