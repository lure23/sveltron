import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const o = {
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default o;
