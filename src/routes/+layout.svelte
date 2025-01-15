<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { locale, isLoading } from 'svelte-i18n';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/settings';
  import { initI18n } from '$lib/i18n/i18n';

  let mounted = false;

  // Subscribe to theme changes to ensure the store is active
  $: if (browser && $theme) {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
  }

  onMount(async () => {
    if (browser) {
      await initI18n();
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        theme.set(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.set('dark');
      }
      mounted = true;
    }
  });

  $: ready = mounted && !$isLoading;
</script>

{#if ready || !browser}
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
{:else}
  <!-- Loading state -->
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
{/if}
