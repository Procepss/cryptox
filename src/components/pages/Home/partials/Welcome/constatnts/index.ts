export const TITLE = 'CRYPTOX';
export const SUBTITLE = 'welcome&nbsp;to';
export const PARAGRAPH =
	'Blockchain tools and information to&nbsp;buy, sell and invest';
export const LINKID = 'https://www.linkedin.com/company/chulakov';

export const PLACEHOLDER_TEXT = [{ type: 'heading2', text: 'CRYPTOX' }];

export const container = {
	hidden: {
		opacity: 0,
	},
	visible: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: i * 0 },
	}),
};

export const variants = {
	activate: {
		// opacity: 0,
		right: -400,
		transition: {
			duration: 1,
		},
	},
	inactivate: {
		// opacity: 1,
		right: 40,
		transition: {
			duration: 1,
		},
	},
};
