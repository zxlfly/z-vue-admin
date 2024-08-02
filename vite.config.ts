import { defineConfig, loadEnv } from "vite"
import alias from "./vite-config/alias"
import getVitePlugins from "./vite-config/plugins"
import server from "./vite-config/server"
import build from "./vite-config/build"
import { viteMockServe } from "vite-plugin-mock"
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    const env = loadEnv(mode, process.cwd())
    console.log(env)
    return {
        plugins: [...getVitePlugins(),
            viteMockServe({
                mockPath: "src/mock",
                enable: true,
                logger: true,
            }),
        ],
        // 环境变量
        resolve: {
            alias,
        },
        server,
        build,
    }
})
