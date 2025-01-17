<!-- src/routes/[lang]/issues/IssueLayout.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { language } from '$lib/stores/settings';
  import { _ } from 'svelte-i18n';
  import { base } from '$app/paths';
  import { ChevronLeft } from 'lucide-svelte';
  import { getPreviousIssue, getNextIssue } from '$lib/data/issues';
 
  // Get current language for navigation
  $: currentLang = $language || 'en';

  export let issueNumber: number;
  export let issueId: string;
  
  // Track reading progress
  let progress = 0;
  let mainContent: HTMLElement;
  
  function updateReadingProgress() {
    if (!mainContent) return;
    const scrollPosition = window.scrollY;
    const totalHeight = mainContent.offsetHeight - window.innerHeight;
    progress = Math.min((scrollPosition / totalHeight) * 100, 100);
  }

  $: previousIssue = getPreviousIssue(issueId);
  $: nextIssue = getNextIssue(issueId);
</script>

<svelte:window on:scroll={updateReadingProgress} />

<div class="min-h-screen bg-white dark:bg-gray-900" bind:this={mainContent}>
  <!-- Reading Progress Bar -->
  <div 
    class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
  >
    <div
      class="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150"
      style="width: {progress}%"
    ></div>
  </div>

  <!-- Navigation Header -->
  <div class="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a 
          href="{base}/{$page.params.lang}/issues"
          class="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ChevronLeft class="w-5 h-5" />
          <span class="ml-1">{$_('issues.common.back_to_issues')}</span>
        </a>
        
        <!-- Issue Navigation -->
        <div class="flex items-center gap-4">
          {#if previousIssue}
            <a 
              href="{base}/{currentLang}/issues/{previousIssue.id}"
              class="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              ← {$_('issues.common.previous_issue')}
            </a>
          {/if}

          <span class="text-sm text-gray-500 dark:text-gray-400">
            {$_('issues.common.issue')} {issueNumber} / 10
          </span>

          {#if nextIssue}
            <a 
              href="{base}/{currentLang}/issues/{nextIssue.id}"
              class="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {$_('issues.common.next_issue')} →
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Side Navigation for Quick Jumps -->
  <nav class="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
    <a 
      href="#why-pressing"
      class="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
    >
      {$_('issues.common.why_pressing')}
    </a>
    <a 
      href="#connections"
      class="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
    >
      {$_('issues.common.connections')}
    </a>
    <a 
      href="#solutions"
      class="block px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
    >
      {$_('issues.common.solutions')}
    </a>
  </nav>

  <!-- Main Content -->
  <main class="pt-8">
    <slot />
  </main>

  <!-- Related Issues Footer -->
  <footer class="mt-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        {$_('issues.common.related_issues')}
      </h2>
      <!-- Related issues grid would go here -->
    </div>
  </footer>
</div>
