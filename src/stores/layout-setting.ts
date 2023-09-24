import { LAYOUT_SETTING } from "@/config/cache";

export const useLayOutSettingStore = defineStore(LAYOUT_SETTING, () => {
	const collapseMenu = ref(false);
	const changeCollapseMenu = () => {
		collapseMenu.value = !collapseMenu.value;
	};
	const mainRefsh = ref(false);
	return {
		collapseMenu,
		mainRefsh,
		changeCollapseMenu,
	};
});
