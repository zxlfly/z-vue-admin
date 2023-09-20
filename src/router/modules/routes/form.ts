import { RoleType } from "@/router/types/RoleType";

export default {
	path: "form",
	name: "Form",
	id: "Form",
	label: "表单控件",
	component: () => import("@/views/form/index.vue"),
	meta: {
		locale: "menu.form",
		requiresAuth: true,
		order: 3,
		roles: [RoleType.admin, RoleType.user],
	},
	children: [
		{
			path: "cascader",
			name: "Cascader",
			id: "Cascader",
			label: "级联选择器",
			component: () => import("@/views/form/cascader/index.vue"),
			meta: {
				locale: "",
				requiresAuth: true,
				roles: [RoleType.admin, RoleType.user],
			},
		},
		{
			path: "date-picker",
			name: "DatePicker",
			id: "DatePicker",
			label: "日期选择",
			component: () => import("@/views/form/date-picker/index.vue"),
			meta: {
				locale: "",
				requiresAuth: true,
				roles: [RoleType.admin, RoleType.user],
			},
		},
		{
			path: "transfer",
			name: "Transfer",
			id: "Transfer",
			label: "穿梭框",
			component: () => import("@/views/form/transfer/index.vue"),
			meta: {
				locale: "",
				requiresAuth: true,
				roles: [RoleType.admin],
			},
		},
	],
};
