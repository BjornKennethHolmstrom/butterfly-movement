// src/lib/data/issues.ts
import type { Issue } from '$lib/types';

// You could also read this from the translation files if preferred
export const issueOrder: Issue[] = [
  {
    id: 'climate-change',
    translationKey: 'issues.climate-change'
  },
  {
    id: 'inequality',
    translationKey: 'issues.inequality'
  },
  {
    id: 'governance',
    translationKey: 'issues.governance'
  },
  {
    id: 'technology',
    translationKey: 'issues.technology'
  },
  {
    id: 'population',
    translationKey: 'issues.population'
  },
  {
    id: 'health',
    translationKey: 'issues.health'
  },
  {
    id: 'education',
    translationKey: 'issues.education'
  },
  {
    id: 'conflict',
    translationKey: 'issues.conflict'
  },
  {
    id: 'water',
    translationKey: 'issues.water'
  },
  {
    id: 'cultural-diversity',
    translationKey: 'issues.cultural-diversity'
  },
  {
    id: 'energy-transition',
    translationKey: 'issues.energy-transition'
  }
];

// Utility functions
export function getIssueNumber(issueId: string): number {
  return issueOrder.findIndex(issue => issue.id === issueId) + 1;
}

export function getNextIssue(currentId: string): Issue | null {
  const currentIndex = issueOrder.findIndex(issue => issue.id === currentId);
  return currentIndex < issueOrder.length - 1 ? issueOrder[currentIndex + 1] : null;
}

export function getPreviousIssue(currentId: string): Issue | null {
  const currentIndex = issueOrder.findIndex(issue => issue.id === currentId);
  return currentIndex > 0 ? issueOrder[currentIndex - 1] : null;
}

export function isValidIssueId(issueId: string): boolean {
  return issueOrder.some(issue => issue.id === issueId);
}
