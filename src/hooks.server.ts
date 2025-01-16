import type { Handle } from '@sveltejs/kit';
import { init, addMessages } from 'svelte-i18n';
import { redirect } from '@sveltejs/kit';

// Import translations directly (not dynamically) for SSR
import en from '$lib/i18n/translations/en.json';
import sv from '$lib/i18n/translations/sv.json';

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});

// Add messages synchronously for SSR
addMessages('en', en);
addMessages('sv', sv);

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;
  const validLanguages = ['en', 'sv'];

  // Handle root path
  if (pathname === '/') {
    throw redirect(307, '/en');
  }

  // Extract language from path
  const pathSegments = pathname.split('/');
  const lang = pathSegments[1];

  // Handle cases where the path contains nested language codes
  if (pathSegments.length > 2 && validLanguages.includes(pathSegments[2])) {
    const newPath = pathname.replace(`/${pathSegments[2]}`, '');
    throw redirect(307, newPath);
  }

  // If no valid language code is found, redirect to default language
  if (!validLanguages.includes(lang)) {
    const newPath = '/en' + pathname;
    throw redirect(307, newPath);
  }

  // Update i18n locale based on URL
  event.locals.lang = lang;

  return await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
};
