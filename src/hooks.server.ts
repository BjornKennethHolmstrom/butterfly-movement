// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { init, addMessages } from 'svelte-i18n';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

import en from '$lib/i18n/translations/en.json';
import sv from '$lib/i18n/translations/sv.json';

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});

addMessages('en', en);
addMessages('sv', sv);

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;
  const validLanguages = ['en', 'sv'];

  // Skip handling for error page and static assets
  if (pathname.endsWith('.html') || pathname.startsWith('/static/')) {
    return resolve(event);
  }

  // Skip handling for paths with $ (dynamic segments)
  if (pathname.includes('$')) {
    return resolve(event);
  }

  // Clean up path
  const path = pathname
    .replace(base, '')
    .replace(/\/+/g, '/')
    .replace(/^\/+/, '/');

  // Get language from path
  const [, lang] = path.split('/');

  // Handle root path without redirect
  if (path === '/' || !lang) {
    event.locals.lang = 'en';
    return resolve(event);
  }

  // Validate language without redirect
  if (!validLanguages.includes(lang)) {
    event.locals.lang = 'en';
    return resolve(event);
  }

  event.locals.lang = lang;

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
};
