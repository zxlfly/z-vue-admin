import { ROUTER_LIST } from "@/config/cache"
// import { LocalStorageService } from "@/utils/storage"
import { constantRoute, anyRoute } from "@/router/static-routes"
import dynamicRoutes from "@/router/modules/index"
import type { RouteRecordRaw } from "vue-router"

export const useRouterListStore = defineStore(ROUTER_LIST, () => {
    const routerList: Ref<RouteRecordRaw[]> = ref([
        ...constantRoute,
        ...dynamicRoutes,
        anyRoute,
    ])
    const getRouterList = computed(() => routerList.value)
    const setRouterList = (value: []) => {
        routerList.value = value
    }
    const clearRouterList = () => {
        routerList.value = []
    }

    return {
        getRouterList,
        setRouterList,
        clearRouterList,
    }
})
