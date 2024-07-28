import components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import IconsResolver from "unplugin-icons/resolver"
export default function useComponents() {
    return components({
        resolvers: [
            // 自动注册图标组件
            IconsResolver({
                enabledCollections: ["ep"],
            }),
            // 自动导入 Element Plus 组件
            ElementPlusResolver(),
        ],
        // 自动注册自定义组件
        dirs: ["src/components"],
        include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
        dts: "types/components.d.ts",
    })
}
