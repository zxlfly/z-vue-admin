import type { RouteRecordRaw } from "vue-router";

export const staticRoutes: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		meta: {
			requiresAuth: false,
		},
		component: () => import("@/views/404.vue"),
	},
];
