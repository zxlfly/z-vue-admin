import { loginApi, getUserInfo, type UserLoginInfo } from "@/api/user"
import { USER, TOKEN } from "@/config/cache"
import { LocalStorageService } from "@/utils/storage"
import { ElNotification } from "element-plus"
import { constantRoute, anyRoute } from "@/router/static-routes"
import dynamicRoutes from "@/router/modules/index"
import type { RouteRecordRaw } from "vue-router"
import { cloneDeep } from "lodash-es"
import routerconfig from "@/router/index"
export const useUserStore = defineStore(USER, () => {
    const router = useRouter()
    const route = useRoute()
    const menuRoutes = ref<RouteRecordRaw[]>()
    // 读取缓存配置，如果存在就使用
    const res = LocalStorageService.get(USER) as UserLoginInfo | null
    const userInfo = res ? ref(res) : ref(null)
    const getToken = computed(() => userInfo.value?.token)
    // 登录
    async function login(userName: string, password: string) {
        try {
            const res = await loginApi(userName, password)
            if (res.code == 200) {
                // 这个的情况要根据实际需求来，如果是直接返回用户信息就不需要这样处理
                // 而且如果这样处理，在路由守卫中就得确定是否由用户信息，仅凭token是不行的
                LocalStorageService.set(TOKEN, res.data.token)
                const info = await getUser()
                if (info) {
                    ElNotification({
                        title: "欢迎回来！",
                        type: "success",
                        message: "登录成功",
                    })
                    console.log("route", route)
                    if (
                        route.query.redirect &&
                        typeof route.query.redirect == "string"
                    ) {
                        router.push(route.query.redirect)
                    } else {
                        router.push("/")
                    }
                }
            } else {
                ElNotification({
                    type: "warning",
                    message: res.data.message,
                })
            }
            return res
        } catch (error) {
            console.log(error)
            ElNotification({
                type: "error",
                message: (error as Error).message,
            })
            return error
        }
    }
    const getRouterMenu = () => {
        const routes = filterAsyncRoute(
            userInfo.value?.routes ?? [],
            cloneDeep(dynamicRoutes),
        )
        menuRoutes.value = [...constantRoute, ...routes, anyRoute]
        ;[...routes, anyRoute].forEach((route: any) => {
            routerconfig.addRoute(route)
        })
    }
    //获取用户信息
    async function getUser(): Promise<boolean> {
        try {
            const res = await getUserInfo()
            if (res.code == 200) {
                userInfo.value = res.data
                LocalStorageService.set(USER, res.data)
                getRouterMenu()
                return true
            } else {
                ElNotification({
                    type: "warning",
                    message: "登录失败",
                })
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    // 退出登录
    function loginOut() {
        LocalStorageService.remove(USER)
        LocalStorageService.remove(TOKEN)
        router.push("/login")
    }

    return {
        loginOut,
        userInfo,
        getToken,
        login,
        menuRoutes,
        getRouterMenu,
    }
})
function filterAsyncRoute(
    roles: Array<string>,
    asyncRoute: RouteRecordRaw[],
): RouteRecordRaw[] {
    return asyncRoute.filter((item) => {
        if (roles.includes(item.name as string)) {
            if (item.children && item.children.length > 0) {
                item.children = filterAsyncRoute(roles, item.children)
            }
            return true
        }
    })
}
