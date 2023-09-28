import SystemGlobalConfig from "@/app-config"
import { APP_CONFIG } from "@/config/cache"
import { LocalStorageService } from "@/utils/storage"

export const useAppConfigStore = defineStore(APP_CONFIG, () => {
    // 读取缓存配置，如果存在就使用，不存在就使用初始默认值
    const res = LocalStorageService.get(APP_CONFIG) as
        | typeof SystemGlobalConfig
        | null
    const appConfig = ref<typeof SystemGlobalConfig>()
    if (res) {
        appConfig.value = res
    } else {
        appConfig.value = SystemGlobalConfig
        LocalStorageService.set(APP_CONFIG, appConfig.value)
    }
    // 处理需要手动初始化的
    if (appConfig.value.darkMode == "dark") {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
    }
    // 语言
    function setDefaultLanguage(val: Language) {
        appConfig.value!.defaultLanguage = val
        LocalStorageService.set(APP_CONFIG, appConfig.value)
    }
    // 暗黑模式
    const darkMode = computed(() => appConfig.value!.darkMode == "dark")
    function setDarkMode() {
        if (appConfig.value?.darkMode == "light") {
            appConfig.value!.darkMode = "dark"
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        } else {
            appConfig.value!.darkMode = "light"
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
        }
        LocalStorageService.set(APP_CONFIG, appConfig.value)
    }
    // 主题颜色
    return {
        appConfig,
        setDefaultLanguage,
        setDarkMode,
        darkMode,
    }
})
