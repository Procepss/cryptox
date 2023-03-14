import { useId } from '@reach/auto-id';
import React, {
	type ForwardedRef,
	forwardRef,
	type HTMLAttributes,
	type PropsWithChildren,
	useContext,
} from 'react';

import {
	HeadingIdContext,
	HeadingLevelContext,
} from '@/context/HeadingContext';

import cx from './index.module.scss';

export interface RegionProps extends HTMLAttributes<HTMLDivElement> {
	Tag?: 'main' | 'section';
	withContainer?: boolean;
}

/**
 *
 * @see https://sergiodxa.com/articles/keep-heading-levels-consistent-with-react-context
 * @see https://beta.reactjs.org/learn/passing-data-deeply-with-context
 */

function _Region(
	{
		id,
		children,
		withContainer = false,
		Tag = 'section',
		className,
		...props
	}: PropsWithChildren<RegionProps>,
	ref: ForwardedRef<HTMLElement>
) {
	const internalId = useId(id);
	const headingLevel = useContext(HeadingLevelContext);
	const nextLevel = headingLevel + 1;
	return (
		<HeadingIdContext.Provider value={internalId}>
			<HeadingLevelContext.Provider value={nextLevel}>
				<Tag
					className={cx(
						{ Region: Tag === 'section', container: withContainer },
						className
					)}
					ref={ref}
					{...props}
					aria-labelledby={internalId}
					id={internalId}
				>
					{children}
				</Tag>
			</HeadingLevelContext.Provider>
		</HeadingIdContext.Provider>
	);
}

export const Region = forwardRef(_Region);
