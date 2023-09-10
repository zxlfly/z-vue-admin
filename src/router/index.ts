import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "root",
			component: () => import("@/layout/index.vue"),
			redirect: "dashboard",
			children: [
				{
					path: "dashboard",
					name: "dashboard",
					component: () => import("@/views/dashboard/index.vue"),
				},
			],
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/login/index.vue"),
		},
		{
			path: "/404",
			name: "404",
			component: () => import("@/views/404.vue"),
		},
	],
});

export default router;
