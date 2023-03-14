import parse from 'html-react-parser';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { SchemeSVG } from '@/components/base/SchemeSVG';
import { Tag } from '@/components/base/Tag';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';

import { useNavigationContext } from '@/context/NavigationContext';

import cx from './index.module.scss';

interface RoadmapProps extends HTMLAttributes<HTMLElement> {}

const TITLE = 'Focus on&nbsp;result';
const TAG = '// roadmap';
const CAPTION =
	'We&nbsp;develop our product with the clients in&nbsp;mind, providing a&nbsp;rich functionality';

export const Roadmap = ({ className, id, ...props }: RoadmapProps) => {
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
					<div style={{ overflow: 'hidden' }}>
						<Tag
							className={cx('TagRight', { 'TagRight--show': isAnimatingText })}
						>
							{TAG}
						</Tag>
					</div>
					<div className={cx('TitleWrapper')}>
						<Heading
							className={cx('Title', { 'Title--show': isAnimatingText })}
						>
							{parse(TITLE)}
						</Heading>
					</div>
					<div className={cx('CaptionWrapper')}>
						<span className={cx('Caption', { show: isAnimatingText })}>
							{parse(CAPTION)}
						</span>
					</div>
				</div>
				<div className={cx('Right')}>
					<SchemeSVG className={cx('Scheme')} />
				</div>
			</Container>
		</Region>
	);
};
