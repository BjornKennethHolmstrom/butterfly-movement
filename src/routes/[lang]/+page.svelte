<!-- src/routes/[lang]/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { language } from '$lib/stores/settings';
  import { ArrowRight, Globe2, Users, Heart } from 'lucide-svelte';
  import Head from '$lib/components/Head.svelte';

  // Get current language for navigation
  $: currentLang = $language || 'en';

  const featuredIssues = [
    {
      title: 'home.issues.climate.title',
      description: 'home.issues.climate.description',
      icon: Globe2
    },
    {
      title: 'home.issues.inequality.title',
      description: 'home.issues.inequality.description',
      icon: Users
    },
    {
      title: 'home.issues.future.title',
      description: 'home.issues.future.description',
      icon: Heart
    }
  ];
</script>

<Head
  title={$_('home.meta.title')}
  description={$_('home.meta.description')}
/>

<div class="min-h-screen">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('home.hero.title')}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {$_('home.hero.description')}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.gg/your-invite-link"
            class="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {$_('home.hero.join')}
            <ArrowRight size={20} />
          </a>
          <a
            href="{currentLang}/issues"
            class="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            {$_('home.hero.explore')}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Issues Grid -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {$_('home.issues.title')}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each featuredIssues as { title, description, icon: Icon }}
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg dark:hover:shadow-gray-800 transition-all">
            <div class="text-blue-600 dark:text-blue-400 mb-4">
              <svelte:component this={Icon} size={24} />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{$_(title)}</h3>
            <p class="text-gray-600 dark:text-gray-300">{$_(description)}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="bg-blue-600 dark:bg-blue-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold mb-4">
            {$_('home.cta.title')}
          </h2>
          <p class="text-lg text-blue-100 dark:text-blue-200 mb-8">
            {$_('home.cta.description')}
          </p>
          <a
            href="/reflect"
            class="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors inline-block"
          >
            {$_('home.cta.button')}
          </a>
        </div>
        <div class="relative">
          <!-- Updated placeholder with better dark mode support -->
          <div class="aspect-w-4 aspect-h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-xl backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Section -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {$_('home.community.title')}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {$_('home.community.description')}
        </p>
        <a
          href="https://discord.gg/your-invite-link"
          class="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          {$_('home.community.join')}
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
</div>
