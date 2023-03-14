// import { regexEqual } from './regexEqual';

const { regexEqual } = require('./regexEqual');

const bindClassnames = (config) => {
	const styleRule = config.module.rules.find(
		(rule) => typeof rule.oneOf === 'object'
	);

	if (styleRule) {
		// Find the module which targets *.scss|*.sass files
		const moduleSassRule = styleRule.oneOf.find((rule) =>
			regexEqual(rule.test, /\.module\.(scss|sass)$/)
		);

		if (moduleSassRule) {
			// Get the config object for css-loader plugin
			console.log('resolve', require.resolve('@ecomfe/class-names-loader'));
			moduleSassRule.use = [
				{
					loader: require.resolve('@ecomfe/class-names-loader'),
				},
				...moduleSassRule.use,
			];
		}
	}
};

module.exports = { bindClassnames };
