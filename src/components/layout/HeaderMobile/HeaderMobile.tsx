import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import { useDimensions } from 'lib/hooks/useDimensions';
import useLockedBody from 'lib/hooks/useLockedBody';

import HeaderLogoSVG from '@/public/icons/header-logo.svg';

import { MenuToggle } from './partials/MenuToogle';
import { Navigation } from './partials/Navigation';

import cx from './index.module.scss';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 259px 65px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const HeaderMobile = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const [locked, setLocked] = useLockedBody(false, 'root');

	const disableScroll = () => {
		setLocked(!locked);
	};

	useEffect(() => {
		if (isOpen) {
			disableScroll();
		}

		return () => {
			setLocked(locked);
		};
	}, [isOpen]);

	return (
		<div className={cx('Root', { 'Root--open': isOpen })}>
			<a href="#about">
				<HeaderLogoSVG className={cx('Logo')} />
			</a>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={cx('mask')}
						onClick={() => {
							toggleOpen();
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0 }}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.nav
				className={cx('Modal')}
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				custom={height}
				ref={containerRef}
			>
				<motion.div className={cx('menu')} variants={sidebar} />
				<Navigation toggleOpen={toggleOpen} />
				<MenuToggle
					toggle={() => {
						toggleOpen();
					}}
				/>
			</motion.nav>
		</div>
	);
};
