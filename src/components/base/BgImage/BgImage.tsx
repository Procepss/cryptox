import Image, { type ImageProps } from 'next/image';

import cx from './index.module.scss';

export const BgImage = ({ src, alt }: ImageProps) => (
	<Image
		className={cx('BgImage')}
		alt={alt ?? ''}
		src={src}
		placeholder="blur"
		quality={100}
		fill
		sizes="100vw"
		style={{
			objectFit: 'cover',
			pointerEvents: 'none',
		}}
	/>
);
