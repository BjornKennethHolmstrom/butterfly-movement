// src/routes/[lang]/+layout.ts
import type { LayoutLoad } from './$types';
import { language } from '$lib/stores/settings';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params }) => {
  const { lang } = params;
  
  // Validate language
  if (!['en', 'sv'].includes(lang)) {
    throw redirect(307, '/en');
  }

  // Set the language in the store
  language.set(lang);

  return {
    lang
  };
};
