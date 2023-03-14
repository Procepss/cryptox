import Link from 'next/link';

import { DiscordLogoSVG } from '../DiscordLogoSVG ';
import { InstLogoSVG } from '../InstLogoSVG ';
import { TwitterLogoSVG } from '../TwitterLogoSVG';

import cx from './index.module.scss';

interface logosProps {
	className?: string;
	href: string;
}

export const Logos = ({ className, href }: logosProps) => (
	<>
		<Link className={cx('linkLogo', className)} href={href}>
			<TwitterLogoSVG className={cx('svg')} />
		</Link>
		<Link className={cx('linkLogo', className)} href={href}>
			<InstLogoSVG className={cx('svg')} />
		</Link>
		<Link className={cx('linkLogo', className)} href={href}>
			<DiscordLogoSVG className={cx('svg')} />
		</Link>
	</>
);
