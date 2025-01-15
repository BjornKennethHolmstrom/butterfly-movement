// src/lib/store/settings.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';

// Theme store with local storage persistence
function createThemeStore() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    if (!browser) return 'light';
    
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const { subscribe, set } = writable(getInitialTheme());

  return {
    subscribe,
    set: (value: string) => {
      if (browser) {
        localStorage.setItem('theme', value);
        // Update document class for tailwind
        if (value === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      set(value);
    },
    toggle: () => {
      if (browser) {
        const current = localStorage.getItem('theme') || 'light';
        const newTheme = current === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        // Update document class for tailwind
        document.documentElement.classList.toggle('dark');
        set(newTheme);
      }
    }
  };
}

// Language store with local storage persistence
function createLanguageStore() {
  const getInitialLanguage = () => {
    if (!browser) return 'en';
    
    const stored = localStorage.getItem('language');
    if (stored) return stored;
    
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'sv'].includes(browserLang) ? browserLang : 'en';
  };

  const { subscribe, set } = writable(getInitialLanguage());

  return {
    subscribe,
    set: (value: string) => {
      if (browser) {
        localStorage.setItem('language', value);
        locale.set(value);
      }
      set(value);
    }
  };
}

export const theme = createThemeStore();
export const language = createLanguageStore();
