import Icons from "unplugin-icons/vite";

export default function setupIcons() {
	return Icons({
		autoInstall: true,
		compiler: "vue3",
		scale: 1,
		defaultStyle: `
      vertical-align: -0.15em;
      fill: currentcolor;
      overflow: hidden;
    `,
	});
}
