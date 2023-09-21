import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";
import { staticRoutes } from "./static-routes";
import dynamicRoutes from "./modules/index";
import { createPermissionGuard } from "./guard/permission";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [...staticRoutes],
	scrollBehavior() {
		return { top: 0, left: 0 };
	},
});
// createPermissionGuard(router, dynamicRoutes);
export default router;
