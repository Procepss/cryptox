import {
	Arrow,
	Content,
	Portal,
	Provider,
	Root,
	type TooltipContentProps,
	type TooltipProps as TooltipPropsRadix,
	Trigger,
} from '@radix-ui/react-tooltip';
import { type ReactNode } from 'react';

import cx from './index.module.scss';

export type TooltipProps = {
	content: ReactNode;
} & TooltipContentProps &
	TooltipPropsRadix;

export function Tooltip({
	children,
	content,
	open,
	defaultOpen,
	onOpenChange,
	...props
}: TooltipProps) {
	return (
		<Provider>
			<Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
				<Trigger asChild>{children}</Trigger>
				<Content
					side="top"
					align="center"
					sideOffset={5}
					className={cx('Content')}
					{...props}
				>
					{content}
					<Arrow width={11} height={5} className={cx('Arrow')} />
				</Content>
			</Root>
		</Provider>
	);
}
