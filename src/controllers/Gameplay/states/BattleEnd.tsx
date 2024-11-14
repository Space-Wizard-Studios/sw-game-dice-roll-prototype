import { addChatMessage } from "@stores/ChatStore";

type BattleResult = 'victory' | 'defeat';

export async function BattleEnd(result: BattleResult) {
	await addChatMessage({
		lines: [
			{
				text: 'Esta é a fase do fim da Batalha. Vamos fingir que você perdeu porque ainda não fiz essa parte.',
				type: 'wip',
			},
		],
		requiresUserAction: {type: 'continue'},
	});
}