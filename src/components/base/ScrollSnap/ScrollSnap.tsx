import { Children, cloneElement, useLayoutEffect } from 'react';

import { ScrollBlocker } from './ScrollBlocker';

import cx from './index.module.scss';

interface ScrollSnapProps {
	children: JSX.Element[];
}

export const ScrollSnap = ({ children }: ScrollSnapProps) => {
	useLayoutEffect(() => {
		document.documentElement.style.scrollSnapType = 'y mandatory';

		return () => {
			document.documentElement.style.scrollSnapType = '';
		};
	}, []);

	return (
		<>
			<ScrollBlocker />
			{Children.map(children, (child) =>
				cloneElement(child, {
					className: cx('Slide', child.props?.className),
				})
			)}
			<ScrollBlocker />
		</>
	);
};
