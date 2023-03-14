import { type HTMLAttributes } from 'react';

import ArrowRightSVG from './arrow-right.svg';

import cx from './index.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	withArrow?: boolean;
	type?: 'button' | 'submit';
}

export const Button = ({
	className,
	children,
	withArrow,
	...props
}: ButtonProps) => (
	<button className={cx('Root', { withArrow }, className)} {...props}>
		<span className={cx('Content')}>{children}</span>
		{withArrow && <ArrowRightSVG className={cx('Icon')} />}
	</button>
);
