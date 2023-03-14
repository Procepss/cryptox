import { type HTMLAttributes } from 'react';

import cx from './index.module.scss';

interface PaginationProps extends HTMLAttributes<HTMLElement> {
	activeSlide: number;
	items: any[];
	onChangePage: (index: number) => void;
}

export const Pagination = ({
	className,
	activeSlide,
	items,
	onChangePage,
}: PaginationProps) => (
	<ul className={cx('Root', className)}>
		{items.map((item, index) => (
			<li
				key={index}
				className={cx('Item', { 'Item--active': activeSlide === index })}
				onClick={() => {
					onChangePage(index);
				}}
			/>
		))}
	</ul>
);
