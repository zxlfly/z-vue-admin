import { createI18n } from "vue-i18n"
import en from "./package/en"
import zhCN from "./package/zh-cn"
export const LOCALE_OPTIONS = [
    { label: "简体中文", value: "zhCN" },
    { label: "English", value: "en" },
]
// 这里需要处理持久化 目前没有处理
const i18n = createI18n({
    locale: "zhCN", // 初始值
    fallbackLocale: "zhCN", // 切换的时候如果出现不存的情况使用这个
    messages: {
        en,
        zhCN,
    }, // set locale messages
    legacy: false, // 懒加载 解决Not available in legacy mode报错
    globalInjection: true, //全局使用$t
})
export default i18n
