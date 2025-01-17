import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/butterfly-movement';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/butterfly-movement'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Changed from '404.html' to 'index.html'
      precompress: false,
      strict: false
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Handle 404s and redirects silently during build
        if (path.includes('$') || 
            message.includes('base') || 
            path.includes('/en/') || 
            path.includes('/sv/')) {
          return;
        }
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
