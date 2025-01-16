import type { LayoutLoad } from './$types';

// Enable prerendering
export const prerender = true;
export const ssr = true;

export const load: LayoutLoad = async ({ url }) => {
  const correctedPath = url.pathname.replace(/\/(en|sv)\/\1/, '/$1');
  if (correctedPath !== url.pathname) {
    console.warn(`Corrected invalid path: ${url.pathname} -> ${correctedPath}`);
  }
  return {
    url: correctedPath,
  };
};
