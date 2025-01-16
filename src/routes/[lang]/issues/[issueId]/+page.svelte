<!-- src/routes/[lang]/issues/[issueId]/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import IssueLayout from '../IssueLayout.svelte';
  import IssueConnectionMap from '$lib/components/IssueConnectionMap.svelte';
  import { json } from 'svelte-i18n';
  import { getTranslationObject, getTranslationArray } from '$lib/i18n/config';

  export let data;

  $: baseKey = `issues.${data.issueId}`;
  $: keyAspects = getTranslationArray(`${baseKey}.key_aspects`);
  $: connectionsList = getTranslationArray(`${baseKey}.connections_list`);
  $: solutionsList = getTranslationArray(`${baseKey}.solutions_list`);
</script>

<IssueLayout issueId={data.issueId} issueNumber={data.issueNumber}>
  <!-- Hero Section with Introduction -->
  <section class="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        {$_(`issues.${data.issueId}.title`)}
      </h1>
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {$_(`issues.${data.issueId}.introduction`)}
        </p>
      </div>
    </div>
  </section>

  <!-- Why This Is Pressing -->
  <section id="why-pressing" class="py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {$_('issues.common.why_pressing')}
      </h2>
      <div class="space-y-6">
        {#each keyAspects as aspect}
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {aspect.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {aspect.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Connections -->
  <section id="connections" class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {$_('issues.common.connections')}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <ul class="space-y-4">
          {#each connectionsList as connection}
            <li class="flex gap-4">
              <span class="text-blue-600 dark:text-blue-400">•</span>
              <span>{connection}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <br><br>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
        <IssueConnectionMap currentIssue={data.issueId} />
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          {$_('issues.common.click_to_explore')}
        </p>
      </div>
    </div>
  </section>

  <!-- What Can Be Done -->
  <section id="solutions" class="py-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {$_('issues.common.solutions')}
      </h2>
      <div class="space-y-6">
        {#each solutionsList as solution}
          <div class="border-l-4 border-blue-600 pl-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {solution.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {solution.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</IssueLayout>
