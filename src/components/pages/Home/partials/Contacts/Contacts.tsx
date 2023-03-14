import parse from 'html-react-parser';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { Button } from '@/components/base/Button';
import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Logos } from '@/components/base/Logos';
import { OPEN_MODAL_EVENT } from '@/components/base/Modal';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';
import { Video } from '@/components/base/Video';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import useWindowSize from '@/lib/hooks/useWindowSize';

import { useNavigationContext } from '@/context/NavigationContext';
import safariVideo from '@/public/videos/contacts/arrows-safari.mov';
import googleVideo from '@/public/videos/contacts/arrows-video.webm';

import cx from './index.module.scss';

interface ContactsProps extends HTMLAttributes<HTMLElement> {}

const TAG = '// CONTACTS';
const TITLE = parse('STILL GOT<br>QUESTIONS?');
const BUTTON = parse('CONTACT&nbsp;US');
const NUMBER = parse('+971 50&nbsp;799 3767');
const EMAIL = 'hello@chulakov.com';
const LINKID = 'https://www.linkedin.com/company/chulakov';

export const Contacts = ({ className, id, ...props }: ContactsProps) => {
	const isTablet = useMediaQuery('(max-width: 768px)');

	const handleClick = () => {
		document.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
	};

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

	const { Height } = useWindowSize();

	console.log(innerHeight, 'innerHeight');

	return (
		<Region
			id={id}
			// style={{ height: `${Height}px` }}
			ref={ref}
			className={cx('Root', className)}
			{...props}
		>
			<Container className={cx('Container')}>
				<div className={cx('Up')}>
					<div className={cx('Left')}>
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
						<div className={cx('ButtonWrapper')}>
							<Button
								withArrow
								className={cx('Button', { show: isAnimatingText })}
								onClick={handleClick}
							>
								{BUTTON}
							</Button>
						</div>
					</div>
					<div className={cx('Right', { show: isAnimatingText })}>
						<Video
							className={cx('Video')}
							srcSafari={safariVideo}
							srcGoogle={googleVideo}
						/>
					</div>
				</div>
				<div className={cx('Bottom', { show: isAnimatingText })}>
					<a href="mailto: hello@chulakov.com" className={cx('Email')}>
						{EMAIL}
					</a>
					<div className={cx('Logos')}>
						<Logos href={LINKID} />
					</div>
					<a href="tel:+971507993767" className={cx('Number')}>
						{NUMBER}
					</a>
				</div>
			</Container>
		</Region>
	);
};
