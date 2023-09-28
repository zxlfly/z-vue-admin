type Language = "zh-cn" | "zh-tw" | "en";
type ElementPlusSize = "large" | "default" | "small";
type ColorScheme = "" | "light" | "dark";
type DarkMode = "light" | "dark";

declare interface SYSGlobalConfig {
	defaultLanguage: Language;
	elementPlusSize: ElementPlusSize;
	title: string;
	logo: string;
	showLogo: true;
	darkMode: DarkMode;
}
