import parse from 'html-react-parser';
import Image from 'next/image';
import { type HTMLAttributes } from 'react';

import LinkedinIcon from '@/public/icons/socials/linkedin.svg';
import TwitterIcon from '@/public/icons/socials/twitter.svg';

import cx from './index.module.scss';

const ICONS: Record<string, any> = {
	twitter: TwitterIcon,
	linkedin: LinkedinIcon,
};

interface SlideProps extends HTMLAttributes<HTMLElement> {
	name: string;
	image: string;
	socials: Array<{
		href: string;
		icon: string;
	}>;
}

export const Slide = ({ className, name, image, socials }: SlideProps) => (
	<div className={cx('Root', className)}>
		<div className={cx('ImageWrapper')}>
			<Image
				className={cx('Image')}
				src={image}
				alt={parse(name) as string}
				width={310}
				height={400}
			/>
		</div>
		<div className={cx('Bottom')}>
			<div className={cx('Name')}>{parse(name)}</div>
			<ul className={cx('Socials')}>
				{socials.map((social, index) => {
					const Icon = ICONS[social.icon];
					return (
						<li key={index} className={cx('Social')}>
							<a href={social.href} className={cx('Link')}>
								{Icon ? <Icon className={cx('Icon')} /> : null}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	</div>
);
