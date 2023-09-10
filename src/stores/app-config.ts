import SystemGlobalConfig from "@/app-config";
import { APP_CONFIG } from "@/config/cache";
import { LocalStorageService } from "@/utils/storage";

export const useAppConfigStore = defineStore(APP_CONFIG, () => {
	// 读取缓存配置，如果存在就使用，不存在就使用初始默认值
	let res = LocalStorageService.get(APP_CONFIG) as
		| typeof SystemGlobalConfig
		| null;
	let appConfig = ref<typeof SystemGlobalConfig>();
	if (res) {
		appConfig.value = res;
	} else {
		appConfig.value = SystemGlobalConfig;
		LocalStorageService.set(APP_CONFIG, appConfig.value);
	}
	const getLayoutMode = computed(() => {
		return appConfig.value!.app.layoutMode;
	});

	const getNavCollapse = computed(() => {
		return appConfig.value!.nav.subMenuCollapse;
	});

	const chageLayoutMode = (value: LayoutMode) => {};
	// 设置语言
	function setDefaultLanguage(val: Language) {
		appConfig.value!.defaultLanguage = val;
		LocalStorageService.set(APP_CONFIG, appConfig.value);
	}
	return {
		appConfig,
		setDefaultLanguage,
		getNavCollapse,
		getLayoutMode,
		chageLayoutMode,
	};
});
