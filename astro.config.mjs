import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	base: '/',
	integrations: [
		solid(),
		tailwind(
			{
				applyBaseStyles: false,
			}
		)],
	vite: {
		plugins: [tsconfigPaths()],
		types: ["vite/client"],
	},
});