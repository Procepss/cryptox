declare module '*.module.scss' {
	import type { ArgumentArray } from 'classnames';

	function classNames(...args: ArgumentArray): string;

	export default classNames;
}

declare module '*.module.sass' {
	import type { ArgumentArray } from 'classnames';

	function classNames(...args: ArgumentArray): string;

	export default classNames;
}

declare module '*.mov';

declare module '*.mp4';

declare module '*.webm';
