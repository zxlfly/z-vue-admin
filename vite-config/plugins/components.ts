import components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
export default function setupComponents() {
	return components({
		resolvers: [
			// IconsResolver({
			// 	enabledCollections: ["ep"],
			// }),
			// 自动导入 Element Plus 组件
			// ElementPlusResolver(),
		],
		dirs: ["src/components"],
		include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
		dts: "types/components.d.ts",
	});
}
