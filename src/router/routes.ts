export const constantRoute = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        name: "login",
        meta: {
            title: "login",
            hideInMenu: true,
        },
    },
    {
        path: "/",
        component: () => import("@/layout/index.vue"),
        name: "layout",
        meta: {
            title: "",
            hideInMenu: false,
            icon: "",
        },
        redirect: "/home",
        children: [
            {
                path: "/home",
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
        component: () => import("@/views/screen/index.vue"),
        name: "Screen",
        meta: {
            title: "Screen",
            hideInMenu: false,
            icon: "Platform",
        },
    },
    {
        path: "/404",
        component: () => import("@/views/404/index.vue"),
        name: "404",
        meta: {
            title: "404",
            hideInMenu: true,
        },
    },
]

export const asyncRoute = [
    {
        path: "/acl",
        component: () => import("@/layout/index.vue"),
        name: "Acl",
        meta: {
            title: "表格",
            hideInMenu: false,
            icon: "Lock",
        },
        redirect: "/acl/user",
        children: [
            {
                path: "/acl/user",
                component: () => import("@/views/acl/user/index.vue"),
                name: "User",
                meta: {
                    title: "上下结构表格",
                    hideInMenu: false,
                    icon: "User",
                },
            },
            {
                path: "/acl/role",
                component: () => import("@/views/acl/role/index.vue"),
                name: "Role",
                meta: {
                    title: "树结构表格",
                    hideInMenu: false,
                    icon: "Avatar",
                },
            },
            {
                path: "/acl/permission",
                component: () => import("@/views/acl/permission/index.vue"),
                name: "Permission",
                meta: {
                    title: "左右结构表格",
                    hideInMenu: false,
                    icon: "List",
                },
            },
        ],
    },
    {
        path: "/product",
        component: () => import("@/layout/index.vue"),
        name: "Product",
        meta: {
            title: "其他组件",
            hideInMenu: false,
            icon: "Goods",
        },
        redirect: "/product/trademark",
        children: [
            {
                path: "/product/trademark",
                component: () => import("@/views/product/trademark/index.vue"),
                name: "Trademark",
                meta: {
                    title: "日历",
                    icon: "ShoppingCart",
                    hideInMenu: false,
                },
            },
            {
                path: "/product/attr",
                component: () => import("@/views/product/attr/index.vue"),
                name: "Attr",
                meta: {
                    title: "属性管理",
                    icon: "Management",
                    hideInMenu: false,
                },
            },
            {
                path: "/product/spu",
                component: () => import("@/views/product/spu/index.vue"),
                name: "Spu",
                meta: {
                    title: "Spu",
                    icon: "SetUp",
                    hideInMenu: false,
                },
            },
            {
                path: "/product/sku",
                component: () => import("@/views/product/sku/index.vue"),
                name: "Sku",
                meta: {
                    title: "Sku",
                    icon: "ScaleToOriginal",
                    hideInMenu: false,
                },
            },
        ],
    },
]

export const anyRoute = {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
        title: "任意路由",
        hideInMenu: true,
    },
}
