// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { issueOrder } from './src/lib/data/issuesBuild.js';

// Generate issue paths for both languages
const issuePaths = issueOrder.flatMap(issue => [
  `/en/issues/${issue.id}`,
  `/sv/issues/${issue.id}`
]);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: false
    }),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Log but don't fail on 404s or redirects
        if (message.includes('404') || message.includes('307')) {
          console.warn(`[Warning] ${path}: ${message}`);
          return;
        }
        throw new Error(`${path}: ${message}`);
      },
      entries: [
        '/en',
        '/sv',
        '/en/about',
        '/en/issues',
        '/en/reflect',
        '/en/children',
        '/en/privacy',
        '/en/contact',
        '/sv/about',
        '/sv/issues',
        '/sv/reflect',
        '/sv/children',
        '/sv/privacy',
        '/sv/contact',
        ...issuePaths
      ]
    },
    paths: {
      base: ''
    }
  },
  preprocess: vitePreprocess()
};

export default config;
