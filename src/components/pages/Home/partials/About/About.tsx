import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Button } from '@/components/base/Button';
import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

import { useNavigationContext } from '@/context/NavigationContext';
import sphereGoogle from '@/public/videos/about/sphere.webm';
import sphereSafari from '@/public/videos/about/sphere2.mov';

import {
	BUTTON,
	CAPTION,
	TAG_LEFT_BOTTOM,
	TAG_LEFT_TOP,
	TAG_RIGHT,
	TITLE,
} from './constants';

import cx from './index.module.scss';

interface AboutProps {
	className?: string;
	id: string;
}

export const About = ({ className, id, ...props }: AboutProps) => {
	const isTablet = useMediaQuery('(max-width: 1300px)');
	const isBigTablet = useMediaQuery('(max-width: 1024px)');

	const ref = useRef<HTMLElement>(null);
	const { scrollY } = useScroll({ target: ref, smooth: 20 });
	// eslint-disable-next-line no-negated-condition
	const height = typeof window !== 'undefined' ? window.innerHeight : 8000;
	const yBall = useTransform(
		scrollY,
		[0, height - 100],
		isBigTablet ? ['-15vh', '0vh'] : ['-44vh', '0vh']
	);
	const yBottomText = useTransform(scrollY, [height - 300, height], [300, 0]);

	const opacityBottomText = useTransform(
		scrollY,
		[height - 300, height],
		[0, 1]
	);

	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);
	const { setSection } = useNavigationContext();

	const isAnimatingText = useAnimationText(isVisible);

	return (
		<Region ref={ref} id={id} className={cx('Root', className)} {...props}>
			<Container className={cx('Container')}>
				<motion.div className={cx('Left')} style={{ y: yBall }}>
					<div className={cx('TopTags')}>
						<Tag className={cx('TagLeftTop')}>{TAG_LEFT_TOP}</Tag>
						<Tag className={cx('TagMobile')}>{TAG_LEFT_BOTTOM}</Tag>
					</div>

					<div className={cx('VideoBlock')}>
						<video
							className={cx('Video')}
							autoPlay
							loop
							muted
							playsInline
							width={isTablet ? 400 : 500}
							height={isTablet ? 400 : 500}
						>
							<source src={sphereSafari} type='video/mp4; codecs="hvc1"' />
							<source src={sphereGoogle} type="video/webm" />
						</video>
					</div>
					<motion.div
						className={cx('TagLeftBottom')}
						style={{
							y: yBottomText,
							opacity: opacityBottomText,
						}}
					>
						<Tag className={cx('TagDesktop')}>{TAG_LEFT_BOTTOM}</Tag>
					</motion.div>
				</motion.div>

				<div className={cx('Right')}>
					<div className={cx('TagRight')}>
						<Tag className={cx('Tag', { show: isAnimatingText })}>
							{TAG_RIGHT}
						</Tag>
					</div>
					<div className={cx('TitleWrapper')}>
						<Heading
							className={cx('Title', { 'Title--show': isAnimatingText })}
						>
							{TITLE}
						</Heading>
					</div>
					<div className={cx('CaptionWrapper')}>
						<span className={cx('Caption', { show: isAnimatingText })}>
							{CAPTION}
						</span>
					</div>
					<div className={cx('ButtonWrapper')}>
						<Button
							className={cx('Button', { show: isAnimatingText })}
							withArrow
						>
							{BUTTON}
						</Button>
					</div>
				</div>
			</Container>
		</Region>
	);
};
