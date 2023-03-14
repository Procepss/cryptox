import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useState,
} from 'react';

interface UseBooleanOutput {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
	setTrue: () => void;
	setFalse: () => void;
	toggle: () => void;
}

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
	const [value, setValue] = useState(Boolean(defaultValue));

	const setTrue = useCallback(() => {
		setValue(true);
	}, []);
	const setFalse = useCallback(() => {
		setValue(false);
	}, []);
	const toggle = useCallback(() => {
		setValue((x) => !x);
	}, []);

	return { value, setValue, setTrue, setFalse, toggle };
}

export default useBoolean;
