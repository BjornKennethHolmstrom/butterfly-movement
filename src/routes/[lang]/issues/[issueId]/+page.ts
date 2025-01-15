// src/routes/[lang]/issues/[issueId]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const validIssues = [
    'climate-change', 'inequality', 'governance', 'technology', 
    'population', 'health', 'education', 'conflict', 
    'water', 'cultural-diversity'
  ];

  if (!validIssues.includes(params.issueId)) {
    throw error(404, 'Issue not found');
  }

  return {
    issueId: params.issueId,
    issueNumber: validIssues.indexOf(params.issueId) + 1
  };
};
