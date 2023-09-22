import logo from "@/assets/img/pro.png";
const SystemGlobalConfig: SYSGlobalConfig = {
	// 默认语言. zh-cn: 简体中文 zh-tw: 繁体中文 en: 英文
	defaultLanguage: "zh-cn",
	/**
	 * Element 组件尺寸
	 * 这里有和主内容区默认文字大小关联
	 * 可选：large、default、small
	 * large 主内容区默认文字大小 16px
	 * default 主内容区默认文字大小 14px
	 * small 主内容区默认文字大小 12px
	 */
	elementPlusSize: "default",
	app: {
		/**
		 * 布局模式
		 * onlyTopNav 只有顶部导航
		 * onlySubSideNav 只有侧边栏导航
		 * mainSubSideNav 侧边主导航+侧边次栏导航
		 * topSubSideNav 顶部主导航+侧边次栏导航
		 */
		layoutMode: "topSubSideNav",
	},
	nav: {
		// 次导航栏是否收起
		subMenuCollapse: false,
		// 操作栏（tabbar和toolbar）是否固定
		fixed: true,
	},
	title: "这是一个可配置的title",
	logo: logo,
	showLogo: true,
};
export default SystemGlobalConfig;
