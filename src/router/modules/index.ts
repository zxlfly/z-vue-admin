import { type RouteRecordRaw } from "vue-router"
const modules: Record<string, any> = import.meta.glob("./routes/*.ts", {
    eager: true,
})
const dynamicRoutes: RouteRecordRaw[] = []
function routerSort(a: RouteRecordRaw, b: RouteRecordRaw) {
    if (a.meta?.order != null && b.meta?.order != null) {
        return b.meta?.order - a.meta?.order
    }
    return 0
}
Object.keys(modules).forEach((key) => {
    const defaultModule = modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule)
        ? [...defaultModule]
        : [defaultModule]
    if (moduleList[0].children && moduleList[0].children.length > 0) {
        moduleList[0].children.sort((a: RouteRecordRaw, b: RouteRecordRaw) =>
            routerSort(a, b),
        )
    }
    dynamicRoutes.push(...moduleList)
})
dynamicRoutes.sort((a: RouteRecordRaw, b: RouteRecordRaw) => routerSort(a, b))
export default dynamicRoutes
