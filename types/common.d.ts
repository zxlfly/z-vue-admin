type Language = "zh-cn" | "zh-tw" | "en";
type ElementPlusSize = "large" | "default" | "small";
type ColorScheme = "" | "light" | "dark";
type LayoutMode =
	| "onlyTopNav"
	| "onlySubSideNav"
	| "mainSubSideNav"
	| "topSubSideNav";
interface SYSGlobalApp {
	layoutMode: LayoutMode;
	// enablePermission: boolean;
	// enableProgress: boolean;
	// enableDynamicTitle: boolean;
	// enableDashboard: boolean;
	// colorScheme: ColorScheme;
}
interface SYSGlobalNav {
	subMenuCollapse: boolean;
	fixed: boolean;
}
declare interface SYSGlobalConfig {
	defaultLanguage: Language;
	elementPlusSize: ElementPlusSize;
	app: SYSGlobalApp;
	nav: SYSGlobalNav;
}
