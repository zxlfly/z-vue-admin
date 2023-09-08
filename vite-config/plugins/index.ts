import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import setupAutoImport from "./auto-import";
import setupComponent from "./components";
export default function setUpVitePlugins() {
	const plugins = [vue(), vueJsx(), WindiCSS()];
	plugins.push(setupAutoImport());
	plugins.push(setupComponent());
	return plugins;
}
