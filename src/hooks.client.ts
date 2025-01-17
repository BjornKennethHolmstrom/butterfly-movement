// src/hooks.client.ts
import { base } from '$app/paths';

// Handle client-side navigation with base path
export function handleError({ error }) {
  console.error('An error occurred:', error);
}

// Redirect root to language-specific page
if (typeof window !== 'undefined') {
  if (window.location.pathname === base + '/') {
    window.location.href = base + '/en';
  }
}
