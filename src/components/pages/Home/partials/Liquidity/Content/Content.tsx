import { AnimatePresence, motion } from 'framer-motion';
import parse from 'html-react-parser';
import { type HTMLAttributes } from 'react';

import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { ListItem } from '../ListItem';

import { params } from './config';

import cx from './index.module.scss';

interface ContentProps extends HTMLAttributes<HTMLElement> {
	title: string;
	items: Array<{
		label: string;
		value: number | null;
		suffix: string;
	}>;
	page: number;
}

export const Content = ({
	className,
	title,
	items,
	page,
	...props
}: ContentProps) => (
	<Region className={cx('Root', className)} {...props}>
		<div className={cx('Header')}>
			<div className={cx('TitleWrapper')}>
				<AnimatePresence
					initial={false}
					// custom: direction,
					mode="wait"
				>
					<motion.div key={page} {...params}>
						<Heading className={cx('Title')}>{parse(title)}</Heading>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
		<ul className={cx('Items')}>
			{items.map((item, index) => (
				<ListItem key={index} {...item} />
				// <li key={index} className={cx('Item')}>
				// 	<div className={cx('ItemLabel')}>{parse(item.label)}</div>
				// 	<div className={cx('ItemValue')}>{parse(item.value)}</div>
				// </li>
			))}
		</ul>
	</Region>
);
