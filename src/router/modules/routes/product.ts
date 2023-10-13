export default {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
        title: "其他组件",
        hideInMenu: false,
        icon: "Goods",
        order: 2,
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
                order: 1,
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
                order: 2,
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
                order: 3,
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
                order: 4,
            },
        },
    ],
}
