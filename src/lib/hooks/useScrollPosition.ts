import { type RefObject, useEffect, useState } from 'react';

const useScrollPosition = (
	ref: RefObject<HTMLElement>,
	cb: (position: number) => void
) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const el = ref.current!;

		const updatePosition = (e: any) => {
			const position = e ? e.target.scrollTop : 0;
			setScrollPosition(position);
			cb(position);
		};

		el.addEventListener('scroll', updatePosition);
		updatePosition(null);
		return () => {
			el.removeEventListener('scroll', updatePosition);
		};
	}, []);

	return scrollPosition;
};

export default useScrollPosition;
