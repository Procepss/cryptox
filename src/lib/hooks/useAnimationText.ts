import { useEffect, useState } from 'react';

const useAnimationText = (inView: boolean) => {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		if (inView && !isShow) {
			setIsShow(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);

	return isShow;
};

export default useAnimationText;
