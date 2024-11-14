import { useGameManager } from "@stores/GameContext";
import type { GameSceneType } from "@models/scenes/Scenes";

import { GameplayScene } from '@components/Scenes/Gameplay';
import { GameoverScene } from '@components/Scenes/Gameover';
import { MainMenuScene } from '@components/Scenes/MainMenu';

function renderScene(scene: GameSceneType) {
	switch (scene) {
		case 'gameplayScene':
			return <GameplayScene />;
		case 'gameoverScene':
			return <GameoverScene />;
		case 'mainMenuScene':
			return <MainMenuScene />;
		default:
			return null;
	}
}

export const SceneRenderer = () => {
	const [gameManager] = useGameManager();

	return (
		<main class="relative h-dvh w-dvh overflow-hidden">
			{renderScene(gameManager.currentSceneState.scene)}
		</main>
	);
};