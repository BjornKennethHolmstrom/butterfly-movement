<!-- src/routes/[lang]/issues/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { getTranslationObject } from '$lib/i18n/config';
  import Head from '$lib/components/Head.svelte';
  import Mermaid from '$lib/components/Mermaid.svelte';
  import { ChevronDown, ChevronRight } from 'lucide-svelte';
  import { issueOrder } from '$lib/data/issues';

  // State for expandable sections
  let showExtendedList = false;

  // Get translations as objects/arrays using stores
$: environmentalChallenges = getTranslationObject('issues.extended.environmental.challenges');
$: socialChallenges = getTranslationObject('issues.extended.social.challenges');
$: technologicalChallenges = getTranslationObject('issues.extended.technological.challenges');
$: governanceChallenges = getTranslationObject('issues.extended.governance.challenges');

  const systemDiagram = `
flowchart TD
    classDef primary fill:#4A90E2,stroke:#2171C7,color:white
    classDef secondary fill:#34D399,stroke:#059669,color:white
    
    Climate[Climate Change & Environmental Degradation]
    Inequality[Social & Economic Inequality]
    Governance[Global Governance Crisis]
    Tech[Technological Impact]
    Population[Population & Urbanization]
    Health[Global Health]
    Education[Education & Knowledge]
    Conflict[Conflict & Instability]
    Water[Water Crisis]
    Culture[Cultural Diversity]

    %% Primary connections
    Climate <--> Inequality
    Climate <--> Water
    Climate <--> Population
    Inequality <--> Education
    Inequality <--> Health
    Governance <--> Conflict
    Governance <--> Tech
    Population <--> Water
    Population <--> Health
    Tech <--> Education

    %% Secondary connections
    Climate --> Health
    Inequality --> Conflict
    Tech --> Culture
    Education --> Culture
    Conflict --> Population
    Water --> Health

    class Climate,Inequality,Governance primary
    class Tech,Population,Health,Education,Conflict,Water,Culture secondary
`;

  $: topIssues = issueOrder.slice(0, 10); // First 10 issues
  $: extendedIssues = issueOrder.slice(10); // Remaining issues

  const categories = [
    {
      title: 'issues.extended.environmental.title',
      challenges: environmentalChallenges
    },
    {
      title: 'issues.extended.social.title',
      challenges: socialChallenges
    },
    {
      title: 'issues.extended.technological.title',
      challenges: technologicalChallenges
    },
    {
      title: 'issues.extended.governance.title',
      challenges: governanceChallenges
    }
  ];
</script>

<Head
  title={$_('issues.meta.title')}
  description={$_('issues.meta.description')}
/>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Hero Section -->
  <section class="relative py-20 bg-gradient-to-b from-blue-50 via-white to-transparent dark:from-blue-900 dark:via-gray-900 dark:to-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          {$_('issues.hero.title')}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {$_('issues.hero.description')}
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {$_('issues.hero.call_to_action')}
        </p>
      </div>

      <!-- Key Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10</div>
          <div class="text-gray-600 dark:text-gray-300">
            {$_('issues.hero.stats.primary')}
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40+</div>
          <div class="text-gray-600 dark:text-gray-300">
            {$_('issues.hero.stats.additional')}
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm">
          <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">∞</div>
          <div class="text-gray-600 dark:text-gray-300">
            {$_('issues.hero.stats.connections')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Top 10 Issues Grid -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        {$_('issues.list_sections.top10_title')}
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each topIssues as issue, index}
          <a 
            href={`/${$page.params.lang}/issues/${issue.id}`}
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {index + 1}
              </span>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {$_(`issues.${issue.id}.title`)}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {$_(`issues.${issue.id}.summary`)}
                </p>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Section with System Connections Diagram -->
  <section class="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {$_('issues.hero.title')}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {$_('issues.hero.description')}
        </p>
      </div>
      
      <!-- Placeholder for System Connections Diagram -->
      <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {$_('issues.diagram.title')}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            {$_('issues.diagram.description')}
          </p>
          <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto">
            <Mermaid
              diagram={systemDiagram}
              config={{
                theme: 'neutral',
                flowchart: {
                  curve: 'basis',
                  padding: 20
                }
              }}
            />
          </div>
          <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p class="mb-2">{$_('issues.diagram.legend.title')}</p>
            <ul class="space-y-1">
              <li class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                {$_('issues.diagram.legend.primary')}
              </li>
              <li class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                {$_('issues.diagram.legend.secondary')}
              </li>
              <li class="flex items-center gap-2">
                <span class="w-4 h-px bg-gray-400"></span>
                {$_('issues.diagram.legend.connection')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Extended List Section -->
  <section class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        class="flex items-center gap-2 text-3xl font-bold text-gray-900 dark:text-white mb-12"
        on:click={() => showExtendedList = !showExtendedList}
        aria-expanded={showExtendedList}
      >
        {$_('issues.extended.title')}
        <span class="text-blue-600 dark:text-blue-400">
          {#if showExtendedList}
            <ChevronDown size={24} />
          {:else}
            <ChevronRight size={24} />
          {/if}
        </span>
      </button>

      {#if showExtendedList}
        <div class="space-y-16">
          {#each categories as category}
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {$_(category.title)}
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                {#each Object.entries(category.challenges) as [key, challenge]}
                  <div class="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {challenge.title}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-300">
                      {challenge.description}
                    </p>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>
</div>
