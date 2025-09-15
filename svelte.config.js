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
        // Ignore malformed URLs with $.
        if (path.includes('$.') || path.includes('$./')) {
          console.warn(`Ignoring malformed URL with $.: ${path}`);
          return;
        }
        
        // Ignore double language paths
        if (path.includes('/sv/en/') || 
            path.includes('/en/sv/') ||
            path.includes('/en/en/') ||
            path.includes('/sv/sv/')) {
          console.warn(`Ignoring malformed language URL: ${path}`);
          return;
        }
        
        // Ignore 404s for energy-transition
        if (message.includes('404') && path.includes('/energy-transition')) {
          console.warn(`Ignoring 404 for extended challenge: ${path}`);
          return;
        }
        
        throw new Error(`Prerender failed for ${path}: ${message}`);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
