import parse from 'html-react-parser';
import Image from 'next/image';
import {
	type HTMLAttributes,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

import { useNavigationContext } from '@/context/NavigationContext';
import circle from '@/public/images/circle.png';

import { SLIDES } from './constants';
import { Content } from './Content';
import { Pagination } from './Pagination';

import cx from './index.module.scss';

interface LiquidityProps extends HTMLAttributes<HTMLElement> {
	duration?: number;
}

const TITLE = parse('key indicators of&nbsp;our tokens');
const TAG = '// TOKENOMICS';

export const Liquidity = ({
	className,
	id,
	duration = 5000,
	...props
}: LiquidityProps) => {
	const timerRef = useRef<NodeJS.Timeout>();
	const isPhone = useMediaQuery('(max-width: 768px)');

	const [[page, direction], setPage] = useState([0, 0]);
	const [isDisabled, setIsDisabled] = useState(false);

	const paginate = useCallback(
		(newPage: number) => {
			const nextPage = newPage === SLIDES.length ? 0 : newPage;
			setIsDisabled(true);

			const { rotate } = SLIDES[nextPage];

			imageRef.current?.setAttribute('style', `transform: rotate(${rotate});`);

			setPage([nextPage, newPage > page ? 0 : -1]);

			clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				paginate(page + 1);
			}, duration);
		},
		[duration, page]
	);

	useEffect(() => {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			paginate(page + 1);
		}, duration);
		return () => {
			clearTimeout(timerRef.current);
		};
	}, [duration, page, paginate]);

	const imageRef = useRef<HTMLImageElement>(null);
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
				{!isPhone && (
					<div className={cx('Left')}>
						<Image
							className={cx('Image')}
							src={circle}
							alt="circle"
							fill
							ref={imageRef}
							quality={100}
						/>
					</div>
				)}
				<div className={cx('Right')}>
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
							{TITLE}
						</Heading>
					</div>
					{isPhone && (
						<div className={cx('Left')}>
							<Image
								className={cx('Image')}
								src={circle}
								alt="circle"
								fill
								ref={imageRef}
								quality={100}
							/>
						</div>
					)}
					<div className={cx('RightBottom')}>
						<Content
							className={cx('RightContent')}
							{...SLIDES[page]}
							page={page}
						/>
						<Pagination
							className={cx('Pagination')}
							activeSlide={page}
							items={SLIDES}
							onChangePage={paginate}
						/>
					</div>
				</div>
			</Container>
		</Region>
	);
};
