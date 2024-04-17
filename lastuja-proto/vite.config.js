import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow access to files from the project root.
			allow: ['..']
		},
		host: "0.0.0.0"		// allow VM host to see us
	}
});
