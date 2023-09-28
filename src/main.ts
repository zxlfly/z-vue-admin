import { createApp } from "vue"
import { createPinia } from "pinia"

import ElementPlus from "element-plus"
import "virtual:windi.css"
import "virtual:svg-icons-register"
import "./assets/style/index.scss"
import App from "./App.vue"
import router from "./router"
// const env = import.meta.env
// if (env.VITE_USE_MOCK) {
// }
const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
// 自动导入icon有问题 暂时使用全局导入
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount("#app")
