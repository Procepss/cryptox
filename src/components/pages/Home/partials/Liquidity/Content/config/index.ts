const directionOffset = '100%';

export const params = {
	variants: {
		enter: (direction: number) => ({
			y: `-${directionOffset}`,
		}),
		center: {
			zIndex: 1,
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.35, 0.35, 0.35, 0.35],
			},
		},
		exit: () => ({
			zIndex: 0,
			y: `${directionOffset}`,
		}),
	},
	initial: 'enter',
	animate: 'center',
	exit: 'exit',
	transition: {
		x: {
			duration: 0.4,
		},
	},
};
