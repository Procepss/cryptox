// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
	semi: true,
	trailingComma: 'es5',
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	printWidth: 80,
	endOfLine: 'lf',
	overrides: [
		{
			files: ['*.yaml', '*.yml'],
			options: {
				singleQuote: false,
				useTabs: false,
			},
		},
	],
};
