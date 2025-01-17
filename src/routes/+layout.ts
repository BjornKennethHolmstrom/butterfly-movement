// src/routes/+layout.ts
import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = true;
export const trailingSlash = 'never';

export const load: LayoutLoad = ({ url }) => {
  return {
    pathname: url.pathname
  };
};
