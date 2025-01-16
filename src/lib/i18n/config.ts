// src/lib/i18n/config.ts
import { init, register, _, json } from 'svelte-i18n';
import { browser } from '$app/environment';
import { get } from 'svelte/store';

// Configuration
const defaultLocale = 'en';
const supportedLocales = ['en', 'sv'];

// Register translations
register('en', () => import('./translations/en.json'));
register('sv', () => import('./translations/sv.json'));

let initialized = false;

// Initialize i18n
export async function initI18n() {
  if (!initialized) {
    const config = {
      fallbackLocale: defaultLocale,
      initialLocale: browser 
        ? localStorage.getItem('language') || getInitialLocale() 
        : defaultLocale,
      warnOnMissingMessages: true,
      formats: {
        number: {
          EUR: { style: 'currency', currency: 'EUR' },
          USD: { style: 'currency', currency: 'USD' },
        }
      }
    };

    await init(config);
    initialized = true;
  }
}

// Helper function to determine initial locale
function getInitialLocale(): string {
  if (!browser) return defaultLocale;
  const browserLocale = navigator.language.split('-')[0];
  return supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale;
}

// Helper function to safely get translation objects
export function getTranslationObject(key: string) {
  try {
    return get(json(key)) || {};
  } catch (error) {
    console.warn(`Failed to get translation object for key: ${key}`, error);
    return {};
  }
}

// Helper function to handle arrays
export function getTranslationArray(key: string): any[] {
  try {
    const value = get(json(key));
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn(`Failed to get translation array for key: ${key}`, error);
    return [];
  }
}

// Helper function to validate locale paths
export function validateLocalePath(path: string): string {
  return path.replace(/\/(en|sv)\/\1/, '/$1');
}

// Initialize with default locale for SSR
if (!browser) {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: defaultLocale
  });
}

export { defaultLocale, supportedLocales };
