import type { Router, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useRouterList } from "@/stores/routes-list";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function createPermissionGuard(
	router: Router,
	dynamicRoutes: RouteRecordRaw[]
) {
	router.beforeEach(async (to, from, next) => {
		const userStore = useUserStore();
		const useRouter = useRouterList();
		NProgress.start();
		// 白名单，目前没有配置
		// 不需要权限
		const token = userStore.getToken;

		if (!token && to.path === "/login") {
			console.log(1);
			next();
			NProgress.done();
		} else if (!token || (token && to.path === "/login")) {
			console.log(2);

			// 没有登陆 || 清空用户信息去登录
			userStore.loginOut();
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
			NProgress.done();
			return;
		} else {
			// 判断路由表是否存在，不存在就去计算
			if (useRouter.getRouterList.length === 0) {
				// 后端控制路由：路由数据初始化，防止刷新时丢失
				// await initRoutes();
				const role = userStore.userInfo?.role || "";
				const res = filterAsyncRoutes(dynamicRoutes, role);
				console.log("res", res);
				console.log(dynamicRoutes);

				if (res.length === 0) {
				} else {
					router.addRoute;
				}

				next({ ...to, replace: true });
			} else {
				next();
			}
		}
		// if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
		// 	// 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容ASDFASDFdsfgsddfsgsdfg
		// 	next({ path: to.fullPath, replace: true, query: to.query });
		// } else {
		// 	const redirectPath = (from.query.redirect || to.path) as string;
		// 	const redirect = decodeURIComponent(redirectPath);
		// 	const nextData =
		// 		to.path === redirect
		// 			? { ...to, replace: true }
		// 			: { path: redirect };
		// 	next(nextData);
		// }
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
