import { type ReactNode, useState } from 'react';

import { NavigationContext } from './NavigationContext';

interface NavigationProviderProps {
	children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
	const [section, setSection] = useState('');
	return (
		<NavigationContext.Provider value={{ section, setSection }}>
			{children}
		</NavigationContext.Provider>
	);
};
