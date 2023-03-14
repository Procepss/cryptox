export const ARTICLES = [
	{
		title: 'Cryptocurrency nametook the first round of&nbsp;investments',
		image: '/images/press/1.png',
		href: '#',
		tags: [
			{
				label: '#Mass_media',
			},
			{
				label: '#Investments',
			},
		],
		date: 'DEC 20, 2022',
	},
	{
		title: 'How to&nbsp;write clean code',
		image: '/images/press/2.png',
		href: '#',
		tags: [
			{
				label: '#Mass_media',
			},
			{
				label: '#Investments',
			},
		],
		date: 'DEC 20, 2022',
	},
	{
		title: 'The backstage of&nbsp;creating the CryptoX team',
		image: '/images/press/3.png',
		href: '#',
		tags: [
			{
				label: '#Storytelling',
			},
			{
				label: '#About_team',
			},
		],
		date: 'NOV 10, 2022',
	},
	{
		title: 'What is&nbsp;tokenomics and why is&nbsp;it&nbsp;important?',
		image: '/images/press/4.png',
		href: '#',
		tags: [
			{
				label: '#Investments',
			},
		],
		date: 'NOV 01, 2022',
	},
];

export const variants = {
	show: {
		transition: { staggerChildren: 0.07, delayChildren: 0.6 },
	},
	hide: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const articlesVariants = {
	show: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.6, stiffness: 1000, velocity: -100 },
		},
	},
	hide: {
		y: '50%',
		opacity: 0,
		transition: {
			y: { duration: 0.6, stiffness: 1000 },
		},
	},
};
