import { type HTMLAttributes } from 'react';

import cx from './index.module.scss';

export const Tag = ({
	className,
	...props
}: HTMLAttributes<HTMLSpanElement>) => (
	<span className={cx('Root', className)} {...props} />
);
