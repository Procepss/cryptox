import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { AnimatedText } from '@/components/base/Animations/AnimatedText';
import { Container } from '@/components/base/Container';
import { Logos } from '@/components/base/Logos';
import { Region } from '@/components/base/Region';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';

import { useNavigationContext } from '@/context/NavigationContext';

import {
	container,
	LINKID,
	PARAGRAPH,
	PLACEHOLDER_TEXT,
	SUBTITLE,
	variants,
} from './constatnts';

import cx from './index.module.scss';

interface WelcomeProps extends HTMLAttributes<HTMLElement> {}

export const Welcome = ({ className, id, ...props }: WelcomeProps) => {
	const ref = useRef<HTMLElement>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);
	const { setSection } = useNavigationContext();

	useEffect(() => {
		if (isVisible && id) {
			setSection(id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);
	const isAnimatingText = useAnimationText(isVisible);

	return (
		<Region id={id} ref={ref} className={cx('Root', className)} {...props}>
			<motion.div
				viewport={{ once: false, amount: 1 }}
				initial="activate"
				whileInView="inactivate"
			>
				<Container className={cx('Container')}>
					<div className={cx('Top')} style={{ overflow: 'hidden' }}>
						<p
							className={cx('Subtitle', { 'Subtitle--show': isAnimatingText })}
						>
							{parse(SUBTITLE)}
						</p>
						<motion.div
							className={cx('Title')}
							initial="hidden"
							animate={'visible'}
							variants={container}
						>
							{PLACEHOLDER_TEXT.map((item, index) => (
								<AnimatedText {...item} key={index} />
							))}
						</motion.div>
					</div>
					<div className={cx('Bottom')}>
						<motion.div
							className={cx('SocialBox')}
							initial={variants.activate}
							animate={variants.inactivate}
						>
							<p className={cx('GetFollow')}>{parse(PARAGRAPH)}</p>
							<div className={cx('Logos')}>
								<Logos href={LINKID} />
							</div>
						</motion.div>
					</div>
				</Container>
			</motion.div>
			<div className={cx('Preloader')} />
		</Region>
	);
};
