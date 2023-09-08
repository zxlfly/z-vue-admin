/**
 * 自动导入
 * 使用"vue", "vue-router", "pinia相关api不需要手动引入了
 */
import AutoImport from "unplugin-auto-import/vite";
export default function setupAutoImport() {
	return AutoImport({
		imports: ["vue", "vue-router", "pinia"],
		dts: "types/auto-imports.d.ts",
	});
}
