import { DiceActions } from '@models/actions/DiceAction';
import type { DiceAction } from '@models/actions/DiceAction';

type DiceComboType = 'chargedAttack' | 'heal' | 'magicBurst' | 'parry';

export type DiceCombo = {
	name: string;
	description: string;
	requiredActions: DiceAction[];
};

export const DiceCombos: Record<DiceComboType, DiceCombo> = {
	chargedAttack: {
		name: 'Charged Attack',
		description: 'Charge up an attack to deal massive damage.',
		requiredActions: [DiceActions.physicalAttack, DiceActions.physicalAttack],
	},
	heal: {
		name: 'Heal',
		description: 'Restore health to yourself or an ally.',
		requiredActions: [DiceActions.magicAttack, DiceActions.special],
	},
	magicBurst: {
		name: 'Magic Burst',
		description: 'Charge up an magical attack to deal massive damage.',
		requiredActions: [DiceActions.magicAttack, DiceActions.magicAttack],
	},
	parry: {
		name: 'Parry',
		description: 'Block and counter an incoming attack.',
		requiredActions: [DiceActions.defend, DiceActions.physicalAttack],
	}
} as const;