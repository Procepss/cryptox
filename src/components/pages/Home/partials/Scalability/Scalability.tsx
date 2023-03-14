import parse from 'html-react-parser';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';
import { Video } from '@/components/base/Video';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';

import { useNavigationContext } from '@/context/NavigationContext';
import safariVideo from '@/public/videos/scalability/safari.mov';
import googleVideo from '@/public/videos/scalability/video.webm';

import cx from './index.module.scss';

interface ScalabilityProps extends HTMLAttributes<HTMLElement> {}

const TITLE = 'SCALABILITY';
const TAG = '// FOR DEVELOPERS';
const CAPTION =
	'Integrate pre-built, time-tested solutions that already secure tens of&nbsp;billions in&nbsp;smart contract value for market-leading decentralized applications.';

export const Scalability = ({ className, id, ...props }: ScalabilityProps) => {
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
				<div className={cx('Left', { show: isAnimatingText })}>
					<Video
						className={cx('Video')}
						srcSafari={safariVideo}
						srcGoogle={googleVideo}
					/>
				</div>

				<div className={cx('Right')}>
					<div className={cx('TagRight')}>
						<Tag className={cx('Tag', { show: isAnimatingText })}>{TAG}</Tag>
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
							{parse(CAPTION)}
						</span>
					</div>
				</div>
			</Container>
		</Region>
	);
};
