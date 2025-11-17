import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "友野 贺今林",
	subtitle: "认知 运气 本金 缺一不可",
	lang: "zh_CN", // 语言代码，例如：'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 250, // 主题颜色的默认色调，范围从 0 到 360。例如：红色：0，蓝绿色：200，青色：250，粉色：345
		fixed: false, // 对访客隐藏主题颜色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: false, // 是否显示横幅图片的署名文本
			text: "", // 要显示的署名文本
			url: "", // （可选）指向原始作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认网站图标
		// {
		//   src: '/favicon/icon.png',    // 网站图标的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在为浅色和深色模式设置了不同网站图标时使用
		//   sizes: '32x32',              // （可选）网站图标的尺寸，仅在拥有不同尺寸的网站图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/Chuc-Jie/fuwari", // 内部链接不应包含基础路径，因为它会自动添加
			external: true, // 显示外部链接图标，并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
	name: "友野",
	bio: "认知 运气 本金 缺一不可",
	links: [
		{
			name: "NetEaseMusic",
			icon: "tabler:brand-netease-music",
			url: "https://y.music.163.com/m/user?id=1622471993",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Chuc-Jie",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（例如背景颜色）正在被覆盖，请参阅 astro.config.mjs 文件。
	// 请选择一个深色主题，因为此博客主题目前仅支持深色背景颜色
	theme: "github-dark",
};
