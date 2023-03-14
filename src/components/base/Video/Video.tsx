import cx from './index.module.scss';

interface VideoProps {
	srcSafari: string;
	srcGoogle: string;
	className?: string;
}

export const Video = ({ srcSafari, srcGoogle, className }: VideoProps) => (
	<video className={cx('Video', className)} autoPlay loop muted playsInline>
		<source src={srcSafari} type='video/mp4; codecs="hvc1"' />
		<source src={srcGoogle} type="video/webm" />
	</video>
);
