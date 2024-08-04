import { PluginOption } from "vite"
import vue from "@vitejs/plugin-vue"
import useAutoImport from "./config/use-auto-import"
import useComponents from "./config/use-components"
import useIcons from "./config/use-icons"
import useMock from "./config/use-mock"

export default function getVitePlugins(): PluginOption[] {
    const plugins: PluginOption[] = [vue()]
    plugins.push(useAutoImport())
    plugins.push(useComponents())
    plugins.push(useIcons())
    plugins.push(useMock())
    return plugins
}
