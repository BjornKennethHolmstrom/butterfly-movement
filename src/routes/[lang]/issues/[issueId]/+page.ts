// src/routes/[lang]/issues/[issueId]/+page.ts
import { error } from '@sveltejs/kit';
import { isValidIssueId, getIssueNumber } from '$lib/data/issues';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  if (!isValidIssueId(params.issueId)) {
    throw error(404, 'Issue not found');
  }

  return {
    issueId: params.issueId,
    issueNumber: getIssueNumber(params.issueId)
  };
};
