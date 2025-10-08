import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"
import UnoCSS from "unocss/vite"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"
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
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
            // 指定symbolId格式
            symbolId: "icon-[dir]-[name]",
            /**
             * 自定义插入位置
             * @default: body-last
             */
            inject: "body-first",
        }),
    ],
})
