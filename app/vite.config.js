import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: "0.0.0.0"		// allow VM host to see us
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
