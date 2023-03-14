import { createContext } from 'react';

export const HeadingLevelContext = createContext<number>(0);
export const HeadingIdContext = createContext<string | undefined>(undefined);
