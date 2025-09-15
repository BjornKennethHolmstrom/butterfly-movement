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
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: ['*'],
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore malformed language URLs during build
        if (path.includes('/sv/en/') || 
            path.includes('/en/sv/') ||
            path.includes('/en/en/') ||
            path.includes('/sv/sv/') ||
            message.includes('does not begin with `base`')
        ) {
          console.warn(`Ignoring malformed language URL: ${path}`);
          return;
        }
        
        throw new Error(`Prerender failed for ${path}: ${message}`);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
