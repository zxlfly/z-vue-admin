import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"
import UnoCSS from "unocss/vite"
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ["vue", "vue-router", "pinia"],
            eslintrc: {
                enabled: true,
                filepath: "./types/autoImport/.eslintrc-auto-import.json",
            },
            dts: "./types/autoImport/auto-imports.d.ts",
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            // dirs: ["src/components"],
            dts: "./types/components/components.d.ts",
        }),
        ElementPlus({}),
        UnoCSS({}),
    ],
})
