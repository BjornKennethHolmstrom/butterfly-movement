// src/routes/[lang]/issues/+page.ts
export const prerender = true;

export const entries = () => [
  { lang: 'en' },
  { lang: 'sv' }
];

export const load = async ({ params }) => {
  return {
    params
  };
};
