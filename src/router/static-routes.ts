import type { RouteRecordRaw } from "vue-router";

export const staticRoutes: RouteRecordRaw[] = [
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录",
			hideInMenu: true,
		},
	},
	{
		path: "/",
		name: "layout",
		component: () => import("@/layout/index.vue"),
		meta: {
			requiresAuth: false,
			title: "布局",
			hideInMenu: false,
			icon: "",
		},
		redirect: "home",
		children: [
			{
				path: "home",
				name: "home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页",
					hideInMenu: false,
					icon: "HomeFilled",
				},
			},
		],
	},
	{
		path: "/screen",
		name: "screen",
		component: () => import("@/views/screen/index.vue"),
		meta: {
			requiresAuth: false,
			title: "数据大屏",
			hideInMenu: false,
			icon: "Monitor",
		},
	},
	{
		path: "/acl",
		name: "acl",
		component: () => import("@/layout/index.vue"),
		meta: {
			requiresAuth: false,
			title: "权限管理",
			hideInMenu: false,
			icon: "Lock",
		},
		children: [
			{
				path: "user",
				name: "user",
				component: () => import("@/views/acl/user.vue"),
				meta: {
					title: "用户管理",
					hideInMenu: false,
					icon: "UserFilled",
				},
			},
			{
				path: "role",
				name: "role",
				component: () => import("@/views/acl/role.vue"),
				meta: {
					title: "角色管理",
					hideInMenu: false,
					icon: "User",
				},
			},
			{
				path: "permission",
				name: "permission",
				component: () => import("@/views/acl/permission.vue"),
				meta: {
					title: "菜单管理",
					hideInMenu: false,
					icon: "Menu",
				},
			},
		],
	},
	{
		path: "/404",
		name: "404",
		meta: {
			requiresAuth: false,
			title: "404",
			hideInMenu: true,
		},
		component: () => import("@/views/404.vue"),
	},
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		redirect: "/404",
		meta: {
			title: "没有匹配",
			hideInMenu: true,
		},
	},
];
