// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // For static build, we'll just redirect to English
  throw redirect(307, '/en');
};
