<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import DiscordNotification from './DiscordNotification.svelte';

  // Get language from URL params instead of store
  $: lang = $page.params.lang || 'en';
</script>

<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div class="col-span-2">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {$_('footer.movement')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-md">
          {$_('footer.description')}
        </p>
      </div>
      
      <div>
        <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
          {$_('footer.links')}
        </h3>
        <ul class="space-y-4">
          <li>
            <a href={`${base}/${lang}/privacy`} class="text-gray-600 hover:text-blue-600">
              {$_('footer.privacy')}
            </a>
          </li>
          <li>
            <a href={`${base}/${lang}/contact`} class="text-gray-600 hover:text-blue-600">
              {$_('footer.contact')}
            </a>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
          {$_('footer.social')}
        </h3>
        <ul class="space-y-4">
          <DiscordNotification variant="link" />
        </ul>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-200">
      <p class="text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} {$_('footer.movement')}. {$_('footer.rights')}
      </p>
    </div>
  </div>
</footer>
