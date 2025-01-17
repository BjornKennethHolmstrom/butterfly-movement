<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { language } from '$lib/stores/settings';
  import { base } from '$app/paths';
  import Logo from './Logo.svelte';
  import LanguageSelector from './LanguageSelector.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  let isMenuOpen = false;

  // Get current language for navigation
  $: currentLang = $language || 'en';

  $: navItems = [
    { href: `${base}/${currentLang}`, label: 'nav.home' },
    { href: `${base}/${currentLang}/about`, label: 'nav.about' },
    { href: `${base}/${currentLang}/issues`, label: 'nav.issues' },
    { href: `${base}/${currentLang}/reflect`, label: 'nav.reflect' },
    { href: `${base}/${currentLang}/children`, label: 'nav.children' }
  ];
</script>

<header class="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href={`${base}/${currentLang}`} class="flex items-center" aria-label={$_('nav.home')}>
          <Logo width={40} height={40} />
          <span class="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
            {$_('common.movement-name')}
          </span>
        </a>
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex items-center">
        <div class="flex items-center space-x-4">
          {#each navItems as { href, label }}
            <a  
              {href}
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-2 text-sm font-medium whitespace-nowrap"
              aria-current={$page.url.pathname === href ? 'page' : undefined}
            >
              {$_(label)}
            </a>
          {/each}
        </div>
        
        <div class="flex items-center ml-4 space-x-4">
          <a
            href="https://discord.gg/t8q5RYyEMe"
            class="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            {$_('nav.join')}
          </a>
          <div class="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </nav>

      <!-- Mobile menu button -->
      <div class="flex items-center md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          on:click={() => isMenuOpen = !isMenuOpen}
        >
          <span class="sr-only">
            {isMenuOpen ? $_('nav.close-menu') : $_('nav.open-menu')}
          </span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
        {#each navItems as { href, label }}
         <a 
            {href}
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-current={$page.url.pathname === href ? 'page' : undefined}
          >
            {$_(label)}
          </a>
        {/each}
        
        <a
          href="https://discord.gg/t8q5RYyEMe"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {$_('nav.join')}
        </a>
        <div class="px-3 py-2 flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </div>
  {/if}
</header>
