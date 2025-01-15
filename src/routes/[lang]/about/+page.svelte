<!-- src/routes/[lang]/about/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
  import { Globe2, Users, Sparkles } from 'lucide-svelte';

  const principles = [
    {
      icon: Globe2,
      title: 'about.principles.global.title',
      description: 'about.principles.global.description'
    },
    {
      icon: Users,
      title: 'about.principles.collective.title',
      description: 'about.principles.collective.description'
    },
    {
      icon: Sparkles,
      title: 'about.principles.transformation.title',
      description: 'about.principles.transformation.description'
    }
  ];
</script>

<Head
  title={$_('about.meta.title')}
  description={$_('about.meta.description')}
/>

<div class="min-h-screen">
  <!-- Hero Section -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('about.hero.title')}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {$_('about.hero.description')}
        </p>
      </div>
    </div>
  </section>

  <!-- Origin Story -->
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('about.origin.title')}
        </h2>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {$_('about.origin.paragraph1')}
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('about.origin.paragraph2')}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Principles -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {$_('about.principles.title')}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each principles as { icon: Icon, title, description }}
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div class="text-blue-600 dark:text-blue-400 mb-4">
              <svelte:component this={Icon} size={24} />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {$_(title)}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {$_(description)}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Vision for the Future -->
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('about.vision.title')}
        </h2>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {$_('about.vision.paragraph1')}
          </p>
          <p class="text-gray-600 dark:text-gray-300">
            {$_('about.vision.paragraph2')}
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
