import { defineConfig, loadEnv } from "vite";
import setUpVitePlugins from "./vite-config/plugins/index";
import alias from "./vite-config/alias";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());
	console.log(env);
	return {
		plugins: setUpVitePlugins(env, command === "build"),
		resolve: {
			alias,
		},
	};
});
