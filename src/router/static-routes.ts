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
		path: "/",
		name: "layout",
		component: () => import("@/layout/index.vue"),
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/404",
		name: "404",
		meta: {
			requiresAuth: false,
		},
		component: () => import("@/views/404.vue"),
	},
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		redirect: "/404",
	},
];
