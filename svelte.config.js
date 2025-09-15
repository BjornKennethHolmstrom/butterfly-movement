import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/butterfly-movement'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined, // Remove fallback for better GitHub Pages compatibility
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: ['*'], // Prerender all pages
      handleHttpError: ({ path, referrer, message }) => {
        // Only throw for actual errors, not expected routing issues
        if (message.includes('Not found') || path.includes('$')) {
          return;
        }
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
