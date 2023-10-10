import { createI18n } from "vue-i18n"
const messages = {
    en: {
        message: {
            hello: "hello world",
        },
    },
    zhCn: {
        message: {
            hello: "你好世界",
        },
    },
    zhTw: {
        message: {
            hello: "こんにちは、世界",
        },
    },
}
const i18n = createI18n({
    locale: "zhCn", // 初始值
    fallbackLocale: "zhCn", // 切换的时候如果出现不存的情况使用这个
    messages, // set locale messages
    // legacy: false, // 懒加载
    globalInjection: true, //全局使用$t
})
export default i18n
