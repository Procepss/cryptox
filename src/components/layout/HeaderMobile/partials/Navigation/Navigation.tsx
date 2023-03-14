import { motion } from 'framer-motion';
import React from 'react';

import { HEADER_LINKS } from 'components/layout/Header/Header';

import { Button } from '@/components/base/Button';
import { OPEN_MODAL_EVENT } from '@/components/base/Modal';

import { useNavigationContext } from '@/context/NavigationContext';

import {
	BUTTON,
	buttonVariants,
	linkVariants,
	variants,
} from '../../constants';

import cx from './index.module.scss';

export const Navigation = ({ toggleOpen }: any) => {
	const { section, setSection } = useNavigationContext();

	const handleClick = () => {
		document.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
	};

	return (
		<>
			<motion.nav variants={variants} className={cx('List')}>
				{HEADER_LINKS.map(({ title, link }) => (
					<motion.a
						className={cx('Link', { active: section === link })}
						variants={linkVariants}
						key={link}
						href={`#${link}`}
						onClick={() => {
							toggleOpen();
							setSection(link);
						}}
					>
						{title}
					</motion.a>
				))}
			</motion.nav>
			<motion.div className={cx('Button')} variants={buttonVariants}>
				<Button className={cx('Action')} onClick={handleClick}>
					{BUTTON}
				</Button>
			</motion.div>
		</>
	);
};
