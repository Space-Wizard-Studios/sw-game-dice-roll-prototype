import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';
import { ItemSelection } from '@components/ItemSelection/ItemSelection';
import { CharacterSheet } from '@components/Character/CharacterSheet';

import type { Character } from '@models/Character';

export function CharacterSelection(characters: Character[]): Promise<Character> {
	const [selectedCharacter, setSelectedCharacter] = createSignal<Character>();
	const [isDialogOpen, setDialogOpen] = createSignal(true);

	return new Promise<Character>((resolve) => {
		const handleConfirm = (selectedCharacter: Character) => {
			setSelectedCharacter(selectedCharacter);
			setDialogOpen(false);
			resolve(selectedCharacter);
		};

		render(() => (
			<ItemSelection
				title='Escolha um personagem'
				description='Selecione um personagem para continuar.'
				open={isDialogOpen()}
				items={characters}
				renderItem={renderCharacter}
				onConfirm={handleConfirm}
			/>
		), document.body);
	});
}

export const renderCharacter = (character: Character) => (
	<CharacterSheet character={character} />
);