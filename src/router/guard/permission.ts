import type { Router, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useRouterListStore } from "@/stores/routes-list";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { LocalStorageService } from "@/utils/storage";
import { TOKEN } from "@/config/cache";
NProgress.configure({ showSpinner: false });
export function createPermissionGuard(router: Router) {
	router.beforeEach(async (to, from, next) => {
		const userStore = useUserStore();
		const useRouter = useRouterListStore();
		NProgress.start();
		// 白名单，目前没有配置
		// 不需要权限
		const token = LocalStorageService.get(TOKEN);
		if (!token) {
			if (to.path === "/login") {
				next();
			} else {
				const redirectData: {
					path: string;
					replace: boolean;
					query?: any;
					params?: any;
				} = {
					path: "/login",
					replace: true,
				};
				if (to.path) {
					redirectData.query = {
						...redirectData.query,
						redirect: to.path,
					};
					redirectData.params = from.params ?? null;
				}
				next(redirectData);
			}
		} else {
			// 存在用户信息
			// 刷新路由丢失处理
			if (
				userStore.menuRoutes == undefined ||
				userStore.menuRoutes.length == 0
			) {
				userStore.getRouterMenu();
				next();
			} else if (to.path === "/login") {
				next({ path: "/" });
			} else {
				next();
			}
		}
	});
	router.afterEach(() => {
		NProgress.done();
	});
}
// 根据用户的role字段过滤出路由表
function filterAsyncRoutes(dynamicRoutes: RouteRecordRaw[], role: string) {
	// return dynamicRoutes.filter((route) => {
	// 	// 1.如果route的name在routeNames中没有, 直接过滤掉
	// 	if (!route.meta?.roles!.includes(role)) return false;
	// 	// 2.如果当前route还有子路由(也就是有children), 需要对子路由也进行权限过滤
	// 	if (route.children && route.children.length > 0) {
	// 		route.children = filterAsyncRoutes(route.children, role);
	// 	}
	// 	return true;
	// });
}
