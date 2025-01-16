<!-- src/lib/components/LanguageSelector.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { language } from '$lib/stores/settings';
  import { createEventDispatcher } from 'svelte';
  
  let searchQuery = '';
  let isOpen = false;
  
  const availableLocales = [
    { code: 'en', name: 'English' },
    { code: 'sv', name: 'Svenska' }
  ];
  
  $: filteredLocales = searchQuery
    ? availableLocales.filter(l => 
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : availableLocales;
    
  const dispatch = createEventDispatcher();
  
  function handleSelect(newLocale: string) {
    const currentPath = $page.url.pathname;
    const currentLang = currentPath.split('/')[1];
    const newPath = currentPath.replace(`/${currentLang}`, `/${newLocale}`);
    
    language.set(newLocale);
    goto(newPath);
    
    searchQuery = '';
    isOpen = false;
    dispatch('change', newLocale);
  }

  $: currentLanguage = availableLocales.find(l => l.code === $language)?.name || 'English';
</script>

<div class="relative">
  <button
    type="button"
    class="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700"
    aria-expanded={isOpen}
    aria-haspopup="listbox"
    on:click={() => isOpen = !isOpen}
  >
    <span class="dark:text-white">{currentLanguage}</span>
    <span class="sr-only">Select language</span>
    <svg 
      class="w-4 h-4 dark:text-gray-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
      />
    </svg>
  </button>
  
  {#if isOpen}
    <div 
      class="absolute top-full mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 z-50"
      role="listbox"
    >
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search language..."
        class="w-full px-4 py-2 border-b dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
      />
      <ul class="max-h-48 overflow-y-auto">
        {#each filteredLocales as { code, name }}
          <li>
            <button
              class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 {code === $language ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'dark:text-white'}"
              role="option"
              aria-selected={code === $language}
              on:click={() => handleSelect(code)}
            >
              {name}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  /* Close the dropdown when clicking outside */
  :global(body:has(.relative button[aria-expanded="true"])) {
    pointer-events: none;
  }
  
  .relative {
    pointer-events: auto;
    position: relative;
    z-index: 50;
  }
</style>
