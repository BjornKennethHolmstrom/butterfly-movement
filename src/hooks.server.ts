import type { Handle } from '@sveltejs/kit';
import { init, addMessages } from 'svelte-i18n';

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
  // You can set initial locale based on url or headers here if needed
  return await resolve(event);
};
