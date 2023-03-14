import { animate, type AnimationPlaybackControls } from 'framer-motion';
import parse from 'html-react-parser';
import { type HTMLAttributes, RefObject, useEffect, useRef } from 'react';

import cx from './index.module.scss';

interface ListItemProps extends HTMLAttributes<HTMLElement> {
	label: string;
	value: number | null;
	suffix: string;
}

export const ListItem = ({ label, value, suffix }: ListItemProps) => {
	const valueRef = useRef<HTMLSpanElement>(null);
	const prevValueRef = useRef(value);

	useEffect(() => {
		const node = valueRef.current;
		const prevValue = prevValueRef.current;
		let controls: AnimationPlaybackControls;

		if (value && value !== prevValue) {
			prevValueRef.current = value;
			controls = animate(prevValue, value, {
				duration: 1,
				onUpdate(value) {
					if (value) {
						node!.textContent = value.toFixed(0);
					}
				},
			});
		}

		return () => {
			if (controls) {
				controls.stop();
			}
		};
	}, [value]);

	return (
		<li className={cx('Root')}>
			<div className={cx('Label')}>{parse(label)}</div>
			<div className={cx('ValueWrapper')}>
				<span ref={valueRef} className={cx('Value')}>
					{value}
				</span>
				<span className={cx('Suffix')}>{suffix}</span>
			</div>
		</li>
	);
};
