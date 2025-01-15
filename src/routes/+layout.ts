import type { LayoutLoad } from './$types';

// Enable prerendering
export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
  return {
    url: url.pathname
  };
};
