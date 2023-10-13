import { createRouter, createWebHashHistory } from "vue-router"
import { constantRoute } from "./static-routes"
import { createPermissionGuard } from "./guard/permission"
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [...constantRoute],
    scrollBehavior() {
        return { top: 0, left: 0 }
    },
})

createPermissionGuard(router)
export default router
