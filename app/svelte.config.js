import adapter from 'svelte-adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// ..adapter options "go here"
		})
	}
};

export default config;
