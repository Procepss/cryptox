import cx from './index.module.scss';

interface LogoSVGProps {
	className: string;
}

export const LogoSVG = ({ className }: LogoSVGProps) => (
	<svg
		className={cx(className)}
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM29 19.1421C26.2071 16.3492 24 10 24 10C24 10 21.7614 16.3807 19 19.1421C16.2386 21.9035 9.85786 24.1421 9.85786 24.1421C9.85786 24.1421 16.1226 26.2647 19 29.1421C21.8774 32.0195 24 38.2843 24 38.2843C24 38.2843 26.1226 32.0195 29 29.1421C31.8774 26.2647 38.1421 24.1421 38.1421 24.1421C38.1421 24.1421 31.7929 21.935 29 19.1421Z"
			fill="white"
		/>
	</svg>
);
