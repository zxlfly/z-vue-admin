import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/404",
			name: "404",
			component: () => import("@/views/404.vue"),
		},
	],
});

export default router;
