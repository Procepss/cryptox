import parse from 'html-react-parser';
import { type HTMLAttributes, useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';

import { useNavigationContext } from '@/context/NavigationContext';

import { PEOPLES } from './constants';
import { Slide } from './Slide';

// Config

import cx from './index.module.scss';

SwiperCore.use([Navigation]);

interface TeamProps extends HTMLAttributes<HTMLElement> {}

const TITLE = 'cryptoX Team';
const TAG = '// TEAM';
const CAPTION = `We&rsquo;ve built a&nbsp;great team of&nbsp;entrepreneurs, engineers, and researchers to&nbsp;take CryptoX to&nbsp;the&nbsp;global level.`;

export const Team = ({ className, id, ...props }: TeamProps) => {
	const ref = useRef<HTMLElement>(null);
	const entry = useIntersectionObserver(ref, {});
	const isVisible = Boolean(entry?.isIntersecting);
	const { setSection } = useNavigationContext();

	const isAnimatingText = useAnimationText(isVisible);

	useEffect(() => {
		if (isVisible && id) {
			setSection(id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	return (
		<Region id={id} ref={ref} className={cx('Root', className)} {...props}>
			<Container className={cx('Container')}>
				<div className={cx('Left')}>
					<Tag className={cx('TagRight', { show: isAnimatingText })}>{TAG}</Tag>
					<div className={cx('TitleWrapper')}>
						<Heading
							className={cx('Title', { 'Title--show': isAnimatingText })}
						>
							{TITLE}
						</Heading>
					</div>
					<div className={cx('CaptionWrapper')}>
						<span className={cx('Caption', { show: isAnimatingText })}>
							{parse(CAPTION)}
						</span>
					</div>
				</div>
				<div className={cx('SliderWrapper')}>
					<Swiper
						className={cx('Slider')}
						slidesPerView={'auto'}
						navigation
						spaceBetween={32}
						breakpoints={{
							1367: {
								slidesPerView: 4,
								spaceBetween: 40,
							},
							1500: {
								slidesPerView: 5,
								spaceBetween: 40,
							},
							2100: {
								slidesPerView: 6,
								spaceBetween: 40,
							},
						}}
						resizeObserver
						onResize={(e) => {
							e.update();
						}}
					>
						{PEOPLES.map((people, index) => (
							<SwiperSlide key={index} className={cx('Slide')}>
								<Slide {...people} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</Region>
	);
};
