export default {
    path: "data",
    name: "Data",
    label: "数据展示",
    component: () => import("@/views/form/index.vue"),
    meta: {
        locale: "menu.form",
        requiresAuth: true,
        order: 3,
    },
    children: [
        {
            path: "carousel",
            name: "Carousel",
            id: "Carousel",
            label: "走马灯",
            component: () => import("@/views/data/carousel/index.vue"),
            meta: {
                locale: "",
                requiresAuth: true,
            },
        },
        {
            path: "collapse",
            name: "Collapse",
            id: "Collapse",
            label: "折叠面板",
            component: () => import("@/views/data/collapse/index.vue"),
            meta: {
                locale: "",
                requiresAuth: true,
            },
        },
        {
            path: "skeleton",
            name: "Skeleton",
            id: "Skeleton",
            label: "骨架屏",
            component: () => import("@/views/data/skeleton/index.vue"),
            meta: {
                locale: "",
                requiresAuth: true,
            },
        },
    ],
}
