// src/routes/[lang]/issues/[issueId]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// Define valid issues
const validIssues = [
  'climate-change',
  'inequality',
  'governance',
  'technology',
  'population',
  'health',
  'education',
  'conflict',
  'water',
  'cultural-diversity'
];

// Define valid languages
const validLangs = ['en', 'sv'];

export const prerender = true;

export const entries = () => 
  validLangs.flatMap(lang => 
    validIssues.map(issueId => ({
      lang,
      issueId
    }))
  );

export const load: PageLoad = async ({ params }) => {
  const { issueId, lang } = params;

  // Validate params
  if (!validIssues.includes(issueId)) {
    throw error(404, 'Issue not found');
  }
  if (!validLangs.includes(lang)) {
    throw error(404, 'Invalid language');
  }

  // Get issue number (1-based index)
  const issueNumber = validIssues.indexOf(issueId) + 1;

  return {
    issueId,
    issueNumber,
    lang
  };
};
