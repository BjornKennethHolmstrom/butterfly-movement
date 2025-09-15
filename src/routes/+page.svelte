<!-- src/routes/+page.svelte -->
<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto(`${base}/en`);
  });
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
  <div class="text-center">
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Loading...</h1>
    <p class="text-gray-600 dark:text-gray-300">
      If you're not redirected automatically, 
      <a href="/en" class="text-blue-600 hover:text-blue-700 dark:text-blue-400">click here</a>
    </p>
  </div>
</div>
