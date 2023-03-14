import React, { type HTMLAttributes, useContext } from 'react';

import {
	HeadingIdContext,
	HeadingLevelContext,
} from '@/context/HeadingContext';

import cx from './index.module.scss';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
	level?: number | 'auto';
};

export function Heading({ level = 'auto', className, ...props }: HeadingProps) {
	const id = useContext(HeadingIdContext);
	const headingLevel = useContext(HeadingLevelContext);

	if (id !== undefined && props.id !== undefined && id !== props.id) {
		// We need to ensure if we pass an ID to the Heading we must pass the same ID to the parent Region
		// If we don't do this the ID and labelledby will not match
		throw new Error(
			'When wrapping a Heading in a Region, ensure you provide the same `id` to both components.'
		);
	}

	if (level === 'auto' && headingLevel === 0) {
		throw new Error(
			'To use auto heading levels wrap your Heading in a Region.'
		);
	}

	if (typeof level === 'number' && level <= 0) {
		throw new Error(
			'The level of a Heading must be a positive value greater than zero.'
		);
	}

	const actualLevel = level === 'auto' ? headingLevel : level;
	const classNameInner = cx('Heading', className);
	if (actualLevel <= 6) {
		return React.createElement(`h${actualLevel}`, {
			...props,
			className: classNameInner,
			id: id ?? props.id,
		});
	}

	return React.createElement('div', {
		...props,
		className: classNameInner,
		id: id ?? props.id,
		role: 'heading',
		'aria-level': actualLevel,
	});
}
