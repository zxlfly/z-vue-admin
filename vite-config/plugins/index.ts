import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import setupAutoImport from "./auto-import";
import setupComponent from "./components";
import setupSvgIcon from "./svg-icon";
import setupExtendPluus from "./extend-plus";
import setupIcons from "./icon";
import setupMock from "./mock";
export default function setUpVitePlugins(
	env: Record<string, string>,
	isBuild: boolean
) {
	const { VITE_USE_MOCK } = env;
	const plugins = [vue(), vueJsx(), WindiCSS()];
	plugins.push(setupAutoImport());
	plugins.push(setupComponent());
	plugins.push(setupIcons());
	plugins.push(setupSvgIcon(isBuild));
	VITE_USE_MOCK === "true" && plugins.push(setupMock(isBuild));
	plugins.push(setupExtendPluus());
	return plugins;
}
