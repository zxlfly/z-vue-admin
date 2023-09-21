/**
 * 自动导入
 * 使用"vue", "vue-router", "pinia相关api不需要手动引入了
 */
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
export default function setupAutoImport() {
	return AutoImport({
		imports: ["vue", "vue-router", "pinia"],
		resolvers: [
			IconsResolver({
				prefix: "Icon",
			}),
			ElementPlusResolver(),
		],
		dts: "types/auto-imports.d.ts",
	});
}
