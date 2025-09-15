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
        // Only ignore specific expected routing issues
        if (path.includes('/en/en/') || 
            path.includes('/sv/sv/') ||
            message.includes('404') && (path.includes('$') || path === '/')
        ) {
          console.warn(`Ignoring prerender error for ${path}: ${message}`);
          return;
        }
        
        // Throw for other errors to help debug routing issues
        throw new Error(`Prerender failed for ${path}: ${message}`);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
