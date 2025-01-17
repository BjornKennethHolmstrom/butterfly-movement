// src/routes/[lang]/issues/[issueId]/+page.server.ts
export const prerender = true;

export const entries = [
  { lang: 'en', issueId: 'climate-change' },
  { lang: 'en', issueId: 'inequality' },
  { lang: 'en', issueId: 'governance' },
  { lang: 'en', issueId: 'technology' },
  { lang: 'en', issueId: 'population' },
  { lang: 'en', issueId: 'health' },
  { lang: 'en', issueId: 'education' },
  { lang: 'en', issueId: 'conflict' },
  { lang: 'en', issueId: 'water' },
  { lang: 'en', issueId: 'cultural-diversity' },
  { lang: 'sv', issueId: 'climate-change' },
  { lang: 'sv', issueId: 'inequality' },
  { lang: 'sv', issueId: 'governance' },
  { lang: 'sv', issueId: 'technology' },
  { lang: 'sv', issueId: 'population' },
  { lang: 'sv', issueId: 'health' },
  { lang: 'sv', issueId: 'education' },
  { lang: 'sv', issueId: 'conflict' },
  { lang: 'sv', issueId: 'water' },
  { lang: 'sv', issueId: 'cultural-diversity' }
];
