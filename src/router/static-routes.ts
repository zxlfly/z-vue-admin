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
export const anyRoute = {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
        title: "任意路由",
        hideInMenu: true,
    },
}
