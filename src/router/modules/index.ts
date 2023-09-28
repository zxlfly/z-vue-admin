import type { RouteRecordRaw } from "vue-router"
const modules: Record<string, any> = import.meta.glob("./routes/*.ts", {
    eager: true,
})
const dynamicRoutes: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
    const defaultModule = modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule)
        ? [...defaultModule]
        : [defaultModule]
    dynamicRoutes.push(...moduleList)
})
export default dynamicRoutes
