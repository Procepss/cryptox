import { useState } from 'react';

import useEventListener from 'lib/hooks/useEventListener';
import useIsomorphicLayoutEffect from 'lib/hooks/useIsomorphicLayoutEffect';

interface WindowSize {
	Width: number;
	Height: number;
}

function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		Width: 0,
		Height: 0,
	});

	const handleSize = () => {
		setWindowSize({
			Width: window.innerWidth,
			Height: window.innerHeight,
		});
	};

	useEventListener('resize', handleSize);

	// Set size at the first client-side load
	useIsomorphicLayoutEffect(() => {
		handleSize();
	}, []);

	return windowSize;
}

export default useWindowSize;
