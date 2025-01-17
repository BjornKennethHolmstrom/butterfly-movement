// src/lib/i18n/config.ts
import { init, register, _, json } from 'svelte-i18n';
import { get } from 'svelte/store';
import { browser } from '$app/environment';

const defaultLocale = 'en';
const supportedLocales = ['en', 'sv'];

register('en', () => import('./translations/en.json'));
register('sv', () => import('./translations/sv.json'));

let initialized = false;

export async function initI18n() {
  if (!initialized) {
    const config = {
      fallbackLocale: defaultLocale,
      initialLocale: browser 
        ? localStorage.getItem('language') || getInitialLocale() 
        : defaultLocale,
      warnOnMissingMessages: true
    };

    await init(config);
    initialized = true;
  }
}

function getInitialLocale(): string {
  if (!browser) return defaultLocale;
  const browserLocale = navigator.language.split('-')[0];
  return supportedLocales.includes(browserLocale) ? browserLocale : defaultLocale;
}

// Modified getTranslationObject function
export function getTranslationObject(key: string) {
  try {
    const jsonStore = json.subscribe(value => value);
    const value = get(_)(key);
    
    if (typeof value === 'object' && value !== null) {
      return value;
    }
    return {};
  } catch (error) {
    console.warn(`Failed to get translation object for key: ${key}`, error);
    return {};
  }
}

export function getTranslationArray(key: string): any[] {
  try {
    const value = get(_)(key);
    return Array.isArray(value) ? value : [];
  } catch (error) {
    console.warn(`Failed to get translation array for key: ${key}`, error);
    return [];
  }
}

export function validateLocalePath(path: string): string {
  return path.replace(/\/(en|sv)\/\1/, '/$1');
}

if (!browser) {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: defaultLocale
  });
}

export { defaultLocale, supportedLocales };
