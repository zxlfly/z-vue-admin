/**
 * 自动导入
 */
import AutoImport from "unplugin-auto-import/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
export default function useAutoImport() {
    return AutoImport({
        // 使用"vue", "vue-router", "pinia相关api不需要手动引入了
        // 这个功能根据开发习惯自行决定是否开启
        // imports: ["vue", "vue-router", "pinia"],
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [ElementPlusResolver()],
        dts: "types/auto-imports.d.ts",
        // eslint报错解决
        eslintrc: {
            enabled: true, // Default `false`
            filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
    })
}
