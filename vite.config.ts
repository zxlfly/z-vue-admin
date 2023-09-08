import { defineConfig } from "vite";
import setUpVitePlugins from "./vite-config/plugins/index";
import alias from "./vite-config/alias";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: setUpVitePlugins(),
	resolve: {
		alias,
	},
});
