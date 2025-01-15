<!-- src/routes/[lang]/children/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
  import { Heart, Users, Compass, Brain } from 'lucide-svelte';

  const approaches = [
    {
      icon: Heart,
      title: 'children.approaches.broader.title',
      description: 'children.approaches.broader.description'
    },
    {
      icon: Users,
      title: 'children.approaches.values.title',
      description: 'children.approaches.values.description'
    },
    {
      icon: Compass,
      title: 'children.approaches.agency.title',
      description: 'children.approaches.agency.description'
    },
    {
      icon: Brain,
      title: 'children.approaches.resilience.title',
      description: 'children.approaches.resilience.description'
    }
  ];
</script>

<Head
  title={$_('children.meta.title')}
  description={$_('children.meta.description')}
/>

<div class="min-h-screen">
  <!-- Hero Section -->
  <section class="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('children.hero.title')}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {$_('children.hero.description')}
        </p>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose dark:prose-invert max-w-none">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {$_('children.rethinking.title')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          {$_('children.rethinking.description')}
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/50 rounded-lg p-6 my-8">
          <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {$_('children.questions.title')}
          </h3>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• {$_('children.questions.life')}</li>
            <li>• {$_('children.questions.world')}</li>
            <li>• {$_('children.questions.thrive')}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Approaches Grid -->
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {$_('children.approaches.title')}
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each approaches as { icon: Icon, title, description }}
          <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
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

  <!-- Implementation Section -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {$_('children.implementation.title')}
      </h2>
      <div class="space-y-8">
        {#each ['reflection', 'dialogue', 'systems', 'experiential'] as method}
          <div class="border-l-4 border-blue-600 pl-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {$_(`children.implementation.${method}.title`)}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {$_(`children.implementation.${method}.description`)}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
