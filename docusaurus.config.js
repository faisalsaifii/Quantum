import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Quantum',
	favicon: 'img/favicon.ico',
	url: 'https://quantumdocs.vercel.app',
	baseUrl: '/',
	organizationName: 'faisalsaifii', // Usually your GitHub org/user name.
	projectName: 'Quantum', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	markdown: {
		mermaid: true,
	},
	themes: [
		'@docusaurus/theme-mermaid',
		// '@docusaurus/theme-search-algolia'
	],
	plugins: [
		require.resolve('docusaurus-lunr-search'),
		'@docusaurus/plugin-ideal-image',
		'docusaurus-plugin-image-zoom',
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					editUrl:
						'https://github.com/faisalsaifii/Quantum/tree/main',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			zoom: {
				selector: '.markdown > img',
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)',
				},
				config: {
					// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				},
			},

			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 6,
			},
			image: 'img/social-card.jpg',
			navbar: {
				title: 'Quantum',
				logo: {
					alt: 'Logo',
					src: 'img/logo.svg',
				},
				items: [
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'allSemsSidebar',
					// 	position: 'left',
					// 	label: 'All Semesters',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem1Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 1',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem2Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 2',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem3Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 3',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem4Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 4',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem5Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 5',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem6Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 6',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem7Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 7',
					// },
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'sem8Sidebar',
					// 	position: 'left',
					// 	label: 'Sem 8',
					// },
					{
						type: 'docSidebar',
						sidebarId: 'aiSidebar',
						position: 'left',
						label: 'Artificial Intelligence',
					},
					{
						type: 'docSidebar',
						sidebarId: 'ccSidebar',
						position: 'left',
						label: 'Cloud Computing',
					},
					{
						href: 'https://github.com/faisalsaifii/Quantum',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Semesters',
						items: [
							{
								label: '1st Semester',
								to: '/docs/category/1st-semester',
							},
							{
								label: '2nd Semester',
								to: '/docs/category/2nd-semester',
							},
							{
								label: '3rd Semester',
								to: '/docs/category/3rd-semester',
							},
							{
								label: '4th Semester',
								to: '/docs/category/4th-semester',
							},
							{
								label: '5th Semester',
								to: '/docs/category/5th-semester',
							},
							{
								label: '6th Semester',
								to: '/docs/category/6th-semester',
							},
							{
								label: '7th Semester',
								to: '/docs/category/7th-semester',
							},
							{
								label: '8th Semester',
								to: '/docs/category/8th-semester',
							},
						],
					},
					{
						title: 'Subjects',
						items: [
							{
								label: 'Artificial Intelligence',
								to: '/docs/category/artificial-intelligence-1',
							},
							{
								label: 'Renewable Energy Resources',
								to: '/docs/category/renewable-energy-resources-1',
							},
						],
					},
					{
						title: 'Socials',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/users/14247140/faisal',
							},
							{
								label: 'Linkedin',
								href: 'https://www.linkedin.com/in/faisalsaifii',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/faisalsaifiii',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
