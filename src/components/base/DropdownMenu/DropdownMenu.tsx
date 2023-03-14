import {
	Arrow,
	Content,
	ItemIndicator,
	Portal,
	RadioGroup,
	RadioItem,
	Root,
	Separator,
	Trigger,
} from '@radix-ui/react-dropdown-menu';
import React from 'react';

import './DropdownMenu.scss';

export const DropdownMenu = () => {
	const [person, setPerson] = React.useState('pedro');

	return (
		<Root>
			<Trigger asChild>
				<button className="Button" aria-label="Customise options">
					Личный кабинет
				</button>
			</Trigger>

			<Portal>
				<Content className="DropdownMenuContent" sideOffset={5}>
					<RadioGroup value={person} onValueChange={setPerson}>
						<RadioItem className="DropdownMenuRadioItem" value="pedro">
							<ItemIndicator className="DropdownMenuItemIndicator">
								{/* <DotFilledIcon /> */}
							</ItemIndicator>
							Pedro Duarte
						</RadioItem>

						<Separator className="DropdownMenuSeparator" />

						<RadioItem className="DropdownMenuRadioItem" value="colm">
							<ItemIndicator className="DropdownMenuItemIndicator">
								{/* <DotFilledIcon /> */}
							</ItemIndicator>
							Colm Tuite
						</RadioItem>
					</RadioGroup>

					<Arrow className="DropdownMenuArrow" />
				</Content>
			</Portal>
		</Root>
	);
};
