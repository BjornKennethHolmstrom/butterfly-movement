<!-- src/lib/components/ThemeToggle.svelte -->
<script lang="ts">
  import { Sun, Moon } from 'lucide-svelte';
  import { theme } from '$lib/stores/settings';

  function toggleTheme() {
    theme.toggle();
  }
</script>

<button
  type="button"
  class="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
  on:click={toggleTheme}
  aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if $theme === 'dark'}
    <Sun class="w-5 h-5 text-gray-600 dark:text-gray-300" />
  {:else}
    <Moon class="w-5 h-5 text-gray-600 dark:text-gray-300" />
  {/if}
</button>
