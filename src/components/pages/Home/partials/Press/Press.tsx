import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import Image from 'next/image';
import { type HTMLAttributes, useEffect, useRef } from 'react';

import { Container } from '@/components/base/Container';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { Tag } from '@/components/base/Tag';

import useAnimationText from '@/lib/hooks/useAnimationText';
import useIntersectionObserver from '@/lib/hooks/useIntersectionObserver';

import { useNavigationContext } from '@/context/NavigationContext';
import Arrow from '@/public/icons/article-arrow.svg';

import { ARTICLES, articlesVariants, variants } from './constants';

import cx from './index.module.scss';

interface PressProps extends HTMLAttributes<HTMLElement> {}

const TITLE = 'latest news';
const TAG = '// Press';

export const Press = ({ className, id, ...props }: PressProps) => {
	const ref = useRef<HTMLDivElement>(null);
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
		<Region id={id} className={cx('Root', className)} {...props}>
			<Container className={cx('Container')}>
				<div className={cx('Left')}>
					<div className={cx('TagRight')}>
						<Tag className={cx('Tag', { show: isAnimatingText })}>{TAG}</Tag>
					</div>
					<div ref={ref} className={cx('TitleWrapper')}>
						<Heading
							className={cx('Title', { 'Title--show': isAnimatingText })}
						>
							{TITLE}
						</Heading>
					</div>
				</div>
				<div className={cx('Right')}>
					<div className={cx('ArticlesWrapper')}>
						<motion.ul
							className={cx('Articles')}
							initial={false}
							animate={isAnimatingText ? 'show' : 'hide'}
							variants={variants}
						>
							{ARTICLES.map((article, index) => (
								<motion.li
									key={index}
									className={cx('ArticlesItem')}
									variants={articlesVariants}
								>
									<a className={cx('Article')} href={article.href}>
										<div className={cx('ImageWrapper')}>
											<Image
												className={cx('Image')}
												src={article.image}
												alt={parse(article.title) as string}
												width={120}
												height={98}
											/>
										</div>
										<div className={cx('ArticleContent')}>
											<div className={cx('ArticleHeader')}>
												<Heading className={cx('ArticleTitle')}>
													{parse(article.title)}
												</Heading>
												<div className={cx('IconWrapper')}>
													<Arrow className={cx('Icon')} />
												</div>
											</div>
											<ul className={cx('ArticleTags')}>
												{article.tags.map((tag, index) => (
													<li key={index} className={cx('ArticleTag')}>
														{tag.label}
													</li>
												))}
											</ul>
											<div className={cx('Date')}>{article.date}</div>
										</div>
									</a>
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</Container>
		</Region>
	);
};
