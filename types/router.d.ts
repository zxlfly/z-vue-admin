import { type Component, type VNode } from "vue";
import { type RouteRecordRaw } from "vue-router";

declare module "vue-router" {
	interface RouteMeta {
		// 控制有权访问该页面的角色
		roles?: string[];
		// 图标显示在侧面菜单中
		icon?: string;
		// 区域设置名称显示在侧面菜单和面包屑中
		locale?: string;
		// 如果为true，则不会显示在侧边菜单中
		hideInMenu?: boolean;
		// 对路由菜单项进行排序。如果设置key，值越大越靠前
		order?: number;
		// 如果设置为 true，标签将不会粘贴在标签栏中
		noAffix?: boolean;
		// 如果设置为true，则页面不会被缓存
		ignoreCache?: boolean;
	}
}
