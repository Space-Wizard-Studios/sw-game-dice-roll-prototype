import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { ItemSelection } from '@components/ItemSelection/ItemSelection';

import type { Dice } from '@models/Dice';
import { DiceButton } from '@components/Dice/DiceButton';
import { getUniqueActionsCount } from '@helpers/getDiceActions';
import { playerCharacterStore } from '@stores/CharacterStore';

export function DiceSelection(diceSet: Dice[]): Promise<Dice> {
	const [selectedDice, setSelectedDice] = createSignal<Dice>();
	const [isDialogOpen, setDialogOpen] = createSignal(true);
	const [diceList, setDiceList] = createSignal(diceSet);

	const handleNameChange = (diceID: string, newName: string) => {
		setDiceList(diceList().map(dice => dice.id === diceID ? { ...dice, name: newName } : dice));
	};

	return new Promise<Dice>((resolve) => {
		const handleConfirm = (selectedDice: Dice) => {
			setSelectedDice(selectedDice);
			setDialogOpen(false);
			resolve(selectedDice);
		};

		const renderDiceInfo = (dice: Dice) => (
			<p class='p-2 rounded-md border-2 border-black border-opacity-50'>
				{dice.name}: {dice.actions.length} lados, {getUniqueActionsCount(dice)} ações diferentes
			</p>
		);

		const renderDiceButton = (dice: Dice) => {
			const character = dice.location ? playerCharacterStore.getCharacterById(dice.location) : null;
			const diceIds = character?.diceIds ?? [];
			const isAtMaxCapacity = character ? diceIds.length >= character.role.baseDiceCapacity : false;
			return <DiceButton dice={dice} onNameChange={handleNameChange} disabled={isAtMaxCapacity} />;
		};
		
		render(() => (
			<ItemSelection
				title='Escolha um dado'
				description='Selecione um dado para continuar.'
				open={isDialogOpen()}
				items={diceList()}
				renderIcon={renderDiceButton}
				renderItem={renderDiceInfo}
				onConfirm={handleConfirm}
			/>
		), document.body);
	});
}