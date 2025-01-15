// src/lib/i18n/i18n.ts
import { init, register } from 'svelte-i18n';
import { browser } from '$app/environment';

register('en', () => import('./translations/en.json'));
register('sv', () => import('./translations/sv.json'));

let initialized = false;

export async function initI18n() {
  if (!initialized) {
    initialized = true;
    await init({
      fallbackLocale: 'en',
      initialLocale: browser ? localStorage.getItem('language') || 'en' : 'en'
    });
  }
}

// Initialize with a default locale for SSR
if (!browser) {
  init({
    fallbackLocale: 'en',
    initialLocale: 'en'
  });
}
