import { createApp } from "vue"
import "./assets/style/index.scss"
import App from "./App.vue"
import elementPlugin from "./plugins/element"
const app = createApp(App)
app.use(elementPlugin)
app.mount("#app")
console.log(app)
