import type { Component } from 'solid-js';
import { DiceButton } from '@components/Dice/DiceButton';
import { diceStore } from '@stores/DiceStore';

export type CharacterDiceProps = {
	diceIds?: string[];
	class?: string;
}

export const CharacterDiceSet: Component<CharacterDiceProps> = (props) => {
	const diceIds = props.diceIds ?? []; // Provide a default value

	return (
		<div class='flex flex-row gap-1'>
			{
				diceIds.map(id => {
					const dice = diceStore.getDiceByID(id);
					if (!dice) {
						console.warn(`Dice with ID ${id} not found`);
						return null;
					}
					return <DiceButton dice={dice} />
				})
			}
		</div>
	);
};