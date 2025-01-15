// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: [
				'/',
				'/en',
				'/sv',
				'/en/about',
				'/sv/about',
				'/en/reflect',
				'/sv/reflect',
				'/en/issues',
				'/sv/issues',
				'/en/children',
				'/sv/children'
			]
		}
	},
	preprocess: vitePreprocess()
};

export default config;
