/* eslint-disable */

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { type HTMLAttributes, useState } from 'react';

import { Button } from '@/components/base/Button';
import { OPEN_MODAL_EVENT } from '@/components/base/Modal';

import { useNavigationContext } from '@/context/NavigationContext';

import cx from './index.module.scss';
import { LogoSVG } from '@/components/base/LogoSVG';
import { BUTTON, HEADER_LINKS, variants } from './constants';

export function Header({
	className,
}: Omit<HTMLAttributes<HTMLElement>, 'children'>) {
	const handleClick = () => {
		document.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
	};

	const { section, setSection } = useNavigationContext();

	const { scrollY } = useScroll();

	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest < 25) {
			setHidden(false);
		} else if (latest > 25) {
			setHidden(true);
		}
	});

	return (
		<header className={cx('Root', className)}>
			<div className={cx('Container')}>
				<a href="#about">
					<LogoSVG className={cx('Logo')} />
				</a>
				<motion.nav
					className={cx('Navigation')}
					variants={variants}
					animate={hidden ? 'hidden' : 'visible'}
					transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
				>
					{HEADER_LINKS.map(({ link, title }) => (
						<a
							className={cx('Link', { active: section === link })}
							href={`#${link}`}
							key={link}
							onClick={() => {
								setSection(link);
							}}
						>
							{title}
						</a>
					))}
				</motion.nav>
				<Button className={cx('Action')} onClick={handleClick}>
					{BUTTON}
				</Button>
			</div>
		</header>
	);
}
export { HEADER_LINKS };
