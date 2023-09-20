import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from "vue-router";
import { staticRoutes } from "./static-routes";
import dynamicRoutes from "./modules/index";
import { createPermissionGuard } from "./guard/permission";
console.log(dynamicRoutes);

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...staticRoutes],
	scrollBehavior() {
		return { top: 0 };
	},
});
createPermissionGuard(router, dynamicRoutes);
export default router;
