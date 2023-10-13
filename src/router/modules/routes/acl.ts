export default {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
        title: "表格",
        hideInMenu: false,
        icon: "Lock",
        order: 1,
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
}
