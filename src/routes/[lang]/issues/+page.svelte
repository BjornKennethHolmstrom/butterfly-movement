<!-- src/routes/[lang]/issues/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
  import Mermaid from '$lib/components/Mermaid.svelte';
  import { ChevronDown, ChevronRight } from 'lucide-svelte';

  // State for expandable sections
  let showExtendedList = false;

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

  const topIssues = [
    {
      number: 1,
      slug: 'climate-change',
      title: 'issues.top10.climate.title',
      description: 'issues.top10.climate.description'
    },
    {
      number: 2,
      slug: 'inequality',
      title: 'issues.top10.inequality.title',
      description: 'issues.top10.inequality.description'
    },
    {
      number: 3,
      slug: 'governance',
      title: 'issues.top10.governance.title',
      description: 'issues.top10.governance.description'
    },
    {
      number: 4,
      slug: 'technology',
      title: 'issues.top10.technology.title',
      description: 'issues.top10.technology.description'
    },
    {
      number: 5,
      slug: 'population',
      title: 'issues.top10.population.title',
      description: 'issues.top10.population.description'
    },
    {
      number: 6,
      slug: 'health',
      title: 'issues.top10.health.title',
      description: 'issues.top10.health.description'
    },
    {
      number: 7,
      slug: 'education',
      title: 'issues.top10.education.title',
      description: 'issues.top10.education.description'
    },
    {
      number: 8,
      slug: 'conflict',
      title: 'issues.top10.conflict.title',
      description: 'issues.top10.conflict.description'
    },
    {
      number: 9,
      slug: 'water',
      title: 'issues.top10.water.title',
      description: 'issues.top10.water.description'
    },
    {
      number: 10,
      slug: 'cultural-diversity',
      title: 'issues.top10.cultural.title',
      description: 'issues.top10.cultural.description'
    }
  ];

  const categories = [
    {
      title: 'issues.extended.environmental.title',
      issues: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
      title: 'issues.extended.social.title',
      issues: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      title: 'issues.extended.technological.title',
      issues: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
    },
    {
      title: 'issues.extended.governance.title',
      issues: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    }
  ];
</script>

<Head
  title={$_('issues.meta.title')}
  description={$_('issues.meta.description')}
/>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <!-- Hero Section with System Connections Diagram -->
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
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {$_('issues.diagram.title')}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          {$_('issues.diagram.description')}
        </p>
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

  <!-- Top 10 Issues Grid -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        {$_('issues.top10.title')}
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        {#each topIssues as { number, slug, title, description }}
          
         <a   href={`/${$page.params.lang}/issues/${slug}`}
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex items-start gap-4">
              <span class="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {number}
              </span>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {$_(title)}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {$_(description)}
                </p>
              </div>
            </div>
          </a>
        {/each}
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
          <!-- Environmental Challenges (11-20) -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {$_('issues.extended.environmental.title')}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              {#each Object.entries($_('issues.extended.environmental.challenges')) as [key, challenge]}
                <div class="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {$_(`issues.extended.environmental.challenges.${key}.title`)}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    {$_(`issues.extended.environmental.challenges.${key}.description`)}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Social and Economic Challenges (21-30) -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {$_('issues.extended.social.title')}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              {#each Object.entries($_('issues.extended.social.challenges')) as [key, challenge]}
                <div class="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {$_(`issues.extended.social.challenges.${key}.title`)}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    {$_(`issues.extended.social.challenges.${key}.description`)}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Technological and Ethical Challenges (31-40) -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {$_('issues.extended.technological.title')}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              {#each Object.entries($_('issues.extended.technological.challenges')) as [key, challenge]}
                <div class="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {$_(`issues.extended.technological.challenges.${key}.title`)}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    {$_(`issues.extended.technological.challenges.${key}.description`)}
                  </p>
                </div>
              {/each}
            </div>
          </div>

          <!-- Governance and Political Challenges (41-50) -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {$_('issues.extended.governance.title')}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              {#each Object.entries($_('issues.extended.governance.challenges')) as [key, challenge]}
                <div class="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {$_(`issues.extended.governance.challenges.${key}.title`)}
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300">
                    {$_(`issues.extended.governance.challenges.${key}.description`)}
                  </p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>
</div>
