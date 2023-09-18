import { type Component, type VNode } from "vue";
import { type RouteRecordRaw } from "vue-router";

// 导入的所有路由模块的类型
export interface IModuleType {
	default: RouteRecordRaw[] | RouteRecordRaw;
}

/** 路由对象的类型 */
interface DTRouteRecordRaw extends RouteRecordRaw {
	/** 路由地址 */
	path: string;
	/** 路由的名称 */
	name?: string;
	/** 路由对应的组件 */
	component?: Component;
	/** 重定向 */
	redirect?: string;
	/** 路由元信息，Partial<T> 将T的所有属性更改为可选的 */
	meta?: Partial<DTRouteMeta>;
	/** 子路由 */
	children?: DTRouteRecordRaw[];
	// 是否在菜单栏中显示
	hidden?: boolean;
}

/** 路由元信息类型 */
interface DTRouteMeta {
	/** Menu标题 */
	title?: string;
	/** Icon图标 */
	icon: VNode;
	/** Menu项的排序，仅支持第一级 */
	rank: number;
	/** 是否显示父级 */
	showParent: boolean;
	roles: ["admin", "editor"]; // 设置该路由进入的权限，支持多个权限叠加
	noCache: true; // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
	breadcrumb: false; //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
	affix: true; // 如果设置为true，它则会固定在tags-view中(默认 false)

	// 当路由设置了该属性，则会高亮相对应的侧边栏。
	// 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
	// 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
	activeMenu: "/article/list";
}
