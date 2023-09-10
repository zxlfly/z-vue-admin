import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "virtual:windi.css";
import "virtual:svg-icons-register";
import "./assets/style/index.scss";
import App from "./App.vue";
import router from "./router";
const env = import.meta.env;
if (env.VITE_USE_MOCK) {
}
const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
