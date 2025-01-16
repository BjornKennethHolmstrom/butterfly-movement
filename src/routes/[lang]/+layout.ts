// src/routes/[lang]/ĺayout.ts
import type { LayoutLoad } from './$types';
import { language } from '$lib/stores/settings';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

const validLanguages = ['en', 'sv'];

export const load: LayoutLoad = async ({ params }) => {
  const { lang } = params;
  
  if (!validLanguages.includes(lang)) {
    throw redirect(307, '/en');
  }

  language.set(lang);

  return {
    lang
  };
};
