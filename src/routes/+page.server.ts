// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = false; // Changed to false
export const ssr = true;

export const load: PageServerLoad = async () => {
  throw redirect(307, '/en');
};
