import cx from './index.module.scss';

interface InstLogoSVGProps {
	className: string;
}

export const InstLogoSVG = ({ className }: InstLogoSVGProps) => (
	<svg
		className={cx(className)}
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="24" cy="24" r="24" fill="white" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M17.9677 11.0621C15.8478 11.2981 14.5168 11.8805 13.27 13.1178C11.8621 14.5149 11.3006 15.9649 11.0872 18.755C10.9151 21.0057 11.0162 29.3218 11.2304 30.5374C11.5544 32.3756 12.1088 33.5207 13.2192 34.6451C14.1124 35.5496 14.9375 36.0379 16.1793 36.3968C17.6731 36.8286 18.7631 36.8844 24.7039 36.8324C30.5634 36.7812 30.9387 36.7516 32.368 36.227C34.4825 35.4508 35.9971 33.7038 36.5988 31.3469C37.1336 29.2519 37.1338 18.5711 36.5992 16.4725C35.986 14.0653 34.5249 12.3807 32.368 11.5938C30.8654 11.0457 30.7066 11.0339 24.5015 11.0043C21.3293 10.9891 18.389 11.0153 17.9677 11.0621ZM29.1055 13.3889C32.3437 13.673 33.7564 14.7137 34.3445 17.2488C34.4958 17.9011 34.5166 18.696 34.5175 23.8591C34.5184 29.0635 34.4988 29.8127 34.3438 30.4773C33.8627 32.5412 32.808 33.6687 30.8763 34.1842C29.2604 34.6154 18.9235 34.6091 17.1149 34.1758C15.6548 33.826 14.6001 33.0044 14.0201 31.7651C13.4579 30.5636 13.407 30.0581 13.3504 25.1133C13.2667 17.7984 13.4908 16.1998 14.7946 14.8059C15.584 13.9619 16.6364 13.5452 18.3685 13.3909C19.6823 13.2738 27.7768 13.2723 29.1055 13.3889ZM30.2569 15.5554C30.0833 15.631 29.8124 15.8616 29.655 16.068C29.2835 16.5549 29.244 17.3649 29.5702 17.8055C30.3013 18.7933 31.6432 18.7975 32.2428 17.8141C32.5165 17.3652 32.5117 16.6047 32.2321 16.1524C31.8382 15.5149 30.9598 15.2494 30.2569 15.5554ZM22.9331 17.3009C22.406 17.3882 21.342 17.7664 20.7576 18.0743C20.4062 18.2594 19.8043 18.7352 19.3283 19.2041C18.6371 19.8851 18.4331 20.1671 18.0468 20.9753C17.4997 22.1198 17.3678 22.6963 17.3678 23.944C17.3678 25.7383 18.0065 27.2832 19.2782 28.5651C21.3611 30.6647 24.3159 31.1585 26.9806 29.8522C28.6514 29.0331 30.0606 27.2659 30.4779 25.4665C30.7883 24.1276 30.6475 22.465 30.1192 21.2324C29.3329 19.3981 27.3699 17.7926 25.4122 17.383C24.7526 17.245 23.5172 17.204 22.9331 17.3009ZM25.8963 20.0945C29.105 21.6803 29.0443 26.2447 25.7941 27.7842C25.1518 28.0885 25.0385 28.1089 23.9956 28.1089C22.9512 28.1089 22.8399 28.0888 22.1929 27.7823C19.521 26.5168 18.8885 22.9865 20.9617 20.9104C21.8881 19.9829 22.7589 19.6502 24.1587 19.6893C25.0504 19.7142 25.195 19.748 25.8963 20.0945Z"
			fill="#07061D"
		/>
	</svg>
);