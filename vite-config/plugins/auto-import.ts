/**
 * 自动导入
 * 使用"vue", "vue-router", "pinia相关api不需要手动引入了
 */
import AutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
export default function setupAutoImport() {
    return AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        resolvers: [
            // IconsResolver({
            // 	prefix: "Icon",
            // }),
            // ElementPlusResolver(),
        ],
        dts: "types/auto-imports.d.ts",
        // eslint报错解决
        eslintrc: {
            enabled: true, // Default `false`
            filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
    })
}
