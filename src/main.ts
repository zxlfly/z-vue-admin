import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
const app = createApp(App)
// 如果您正在使用CDN引入，请删除下面一行。
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
// 新增
console.log("process.env.NODE_ENV", process.env.NODE_ENV)
app.mount("#app")
// production mock server
if (process.env.NODE_ENV === "production") {
    import("./mockProdServer").then(({ setupProdMockServer }) => {
        setupProdMockServer()
    })
}
