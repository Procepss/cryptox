import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
} from 'react';

interface NavigationContextType {
	section: string;
	setSection: Dispatch<SetStateAction<string>>;
}

export const NavigationContext = createContext<
	NavigationContextType | undefined
>(undefined);

export const useNavigationContext = (): NavigationContextType => {
	const context = useContext(NavigationContext);
	if (context !== undefined) {
		return context;
	}

	throw new Error('RootContext broken');
};
