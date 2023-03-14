import {
	motion,
	type MotionValue,
	useScroll,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const useParallax = (value: MotionValue<number>, distance: number) =>
	useTransform(value, [0, 1], [distance, -distance]);

export const Parallax = ({ children }: any) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 50);

	return (
		<motion.div style={{ y }} ref={ref}>
			{children}
		</motion.div>
	);
};
