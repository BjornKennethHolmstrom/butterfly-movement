<!-- src/routes/[lang]/reflect/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
  import { Clock, Target, ListChecks, LineChart } from 'lucide-svelte';

  let currentStep = 1;
  let activities = {
    essential: '',
    optional: '',
    timeConsuming: ''
  };
</script>

<Head
  title={$_('reflect.meta.title')}
  description={$_('reflect.meta.description')}
/>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Hero Section -->
  <section class="py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {$_('reflect.hero.title')}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        {$_('reflect.hero.description')}
      </p>
    </div>
  </section>

  <!-- Introduction -->
  <section class="py-12 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {$_('reflect.intro.paragraph1')}
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          {$_('reflect.intro.paragraph2')}
        </p>
      </div>
    </div>
  </section>

  <!-- Self-Reflection Exercise -->
  <section class="py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {$_('reflect.exercise.title')}
      </h2>

      <!-- Step 1: Document Activities -->
      <div class="mb-12">
        <div class="flex items-center mb-4">
          <div class="flex-shrink-0 bg-blue-600 dark:bg-blue-500 rounded-full p-2 mr-4">
            <ListChecks class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {$_('reflect.exercise.step1.title')}
          </h3>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {$_('reflect.exercise.step1.description')}
          </p>
          
          <!-- Activity Input Form -->
          <div class="space-y-4">
            {#each ['essential', 'optional', 'timeConsuming'] as category}
              <div>
                <label 
                  for={`textarea-${category}`} 
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {$_(`reflect.exercise.step1.categories.${category}`)}
                </label>
                <textarea
                  id={`textarea-${category}`}
                  class="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  bind:value={activities[category]}
                  placeholder={$_(`reflect.exercise.step1.placeholders.${category}`)}
                ></textarea>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Step 2: Reflection Questions -->
      <div class="mb-12">
        <div class="flex items-center mb-4">
          <div class="flex-shrink-0 bg-blue-600 dark:bg-blue-500 rounded-full p-2 mr-4">
            <Target class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {$_('reflect.exercise.step2.title')}
          </h3>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="space-y-6">
            {#each ['purpose', 'values', 'fulfillment'] as questionType}
              <div>
                <label 
                  for={`textarea-${questionType}`}
                  class="font-medium text-gray-900 dark:text-white mb-2"
                >
                  {$_(`reflect.exercise.step2.questions.${questionType}.title`)}
                </label>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  {$_(`reflect.exercise.step2.questions.${questionType}.description`)}
                </p>
                <textarea
                  id={`textarea-${questionType}`}
                  class="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder={$_(`reflect.exercise.step2.placeholders.${questionType}`)}
                ></textarea>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Step 3: New Possibilities -->
      <div class="mb-12">
        <div class="flex items-center mb-4">
          <div class="flex-shrink-0 bg-blue-600 dark:bg-blue-500 rounded-full p-2 mr-4">
            <LineChart class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {$_('reflect.exercise.step3.title')}
          </h3>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {$_('reflect.exercise.step3.description')}
          </p>
            <textarea
              id="new-possibilities"
              class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
              placeholder={$_('reflect.exercise.step3.placeholder')}
            ></textarea>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-blue-600 dark:bg-blue-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-white mb-6">
        {$_('reflect.cta.title')}
      </h2>
      <p class="text-xl text-blue-100 mb-8">
        {$_('reflect.cta.description')}
      </p>
      <a
        href="https://discord.gg/your-invite-link"
        class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 dark:hover:bg-gray-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$_('reflect.cta.button')}
      </a>
    </div>
  </section>
</div>
