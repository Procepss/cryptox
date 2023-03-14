import { createContext, useContext } from 'react';

import { type DataContextType } from '@/types/http/dataContext.type';

export const DataContext = createContext<DataContextType | undefined>(
	undefined
);

export const useDataContext = (): DataContextType => {
	const context = useContext(DataContext);
	if (context !== undefined) {
		return context;
	}

	throw new Error('RootContext broken');
};
