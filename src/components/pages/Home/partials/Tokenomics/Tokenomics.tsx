import { motion, useAnimation } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

import { useNavigationContext } from '@/context/NavigationContext';
import bolt1 from '@/public/images/bolt1.png';
import bolt2 from '@/public/images/bolt2.png';
import bolt3 from '@/public/images/bolt3.png';

import {
	DESCR,
	TITLE,
	variant,
	variant2,
	variant2Mobile,
	variant3,
	variant3Mobile,
	variant4,
	variant5,
	variant5Mobile,
} from './constants';

import cx from './index.module.scss';

interface TokenomicsProps extends HTMLAttributes<HTMLElement> {}

export const Tokenomics = ({ className, id, ...props }: TokenomicsProps) => {
	const isPhone = useMediaQuery('(max-width: 768px)');

	const imgAnimation = useAnimation();
	const imgAnimationSecond = useAnimation();
	const imgAnimationThird = useAnimation();

	const handleMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		const moveX = clientX - window.innerWidth / 8;
		const moveY = clientY - window.innerHeight / 8;
		const offsetFactor = 15;
		// eslint-disable-next-line
		Promise.all([
			imgAnimation.start({
				x: moveX / offsetFactor,
				y: moveY / offsetFactor,
			}),
			imgAnimationSecond.start({
				x: (moveX / offsetFactor) * 2,
				y: (moveY / offsetFactor) * 2,
			}),
			imgAnimationThird.start({
				x: (moveX / offsetFactor) * 3,
				y: (moveY / offsetFactor) * 3,
			}),
		]);
	};

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

	return (
		<Region
			id={id}
			ref={ref}
			className={cx('Root', className)}
			onMouseMove={(e: any) => {
				handleMouseMove(e);
			}}
			{...props}
		>
			<motion.div
				viewport={{ once: true, amount: 1 }}
				initial="onscreen"
				whileInView="offscreen"
				style={isPhone ? { width: '100%' } : { width: '80%' }}
			>
				<Container className={cx('Container')}>
					<motion.div variants={variant}>
						<Heading className={cx('heading')}>{TITLE}</Heading>
					</motion.div>
					<motion.div className={cx('description')} variants={variant4}>
						<p className={cx('descriptionText')}>{parse(DESCR)}</p>
					</motion.div>
					<motion.div
						className={cx('BigGittar')}
						variants={isPhone ? variant2Mobile : variant2}
					>
						<motion.div animate={imgAnimationThird}>
							<Image
								className={cx('BigImage')}
								src={bolt1}
								alt="big"
								width={350}
								height={350}
							/>
						</motion.div>
					</motion.div>
					<motion.div
						className={cx('RegGittar')}
						variants={isPhone ? variant3Mobile : variant3}
					>
						<motion.div animate={imgAnimationSecond}>
							<Image
								className={cx('RegImage')}
								src={bolt2}
								alt="big"
								width={350}
								height={350}
							/>
						</motion.div>
					</motion.div>
					<motion.div
						className={cx('LeftGittar')}
						variants={isPhone ? variant5Mobile : variant5}
					>
						<motion.div animate={imgAnimation}>
							<Image
								className={cx('LeftImage')}
								src={bolt3}
								alt="big"
								width={320}
								height={320}
							/>
						</motion.div>
					</motion.div>
				</Container>
			</motion.div>
		</Region>
	);
};
