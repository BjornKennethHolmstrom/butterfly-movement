<!-- src/routes/+error.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
  <div class="max-w-lg w-full text-center">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {$page.status}: {$page.error?.message || 'Page Not Found'}
    </h1>
    
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Choose your language to continue:
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      
      <a  href="{base}/en"
        class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        English
      </a>
      <a
      
        href="{base}/sv"
        class="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
      >
        Svenska
      </a>
    </div>
  </div>
</div>
