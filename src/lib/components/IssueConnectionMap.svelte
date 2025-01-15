<!-- src/lib/components/IssueConnectionMap.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';

  export let currentIssue: string;

  // Define all issues and their connections
  const issues = {
    'climate-change': {
      connections: ['inequality', 'water', 'population', 'health'],
      position: { x: 200, y: 150 }
    },
    'inequality': {
      connections: ['climate-change', 'education', 'health', 'conflict'],
      position: { x: 350, y: 150 }
    },
    'governance': {
      connections: ['conflict', 'technology', 'inequality'],
      position: { x: 275, y: 250 }
    },
    'technology': {
      connections: ['education', 'inequality', 'governance'],
      position: { x: 200, y: 350 }
    },
    'population': {
      connections: ['water', 'health', 'climate-change'],
      position: { x: 350, y: 350 }
    },
    'health': {
      connections: ['population', 'inequality', 'climate-change'],
      position: { x: 125, y: 250 }
    },
    'education': {
      connections: ['inequality', 'technology', 'cultural-diversity'],
      position: { x: 425, y: 250 }
    },
    'conflict': {
      connections: ['governance', 'inequality', 'water'],
      position: { x: 275, y: 150 }
    },
    'water': {
      connections: ['climate-change', 'population', 'conflict'],
      position: { x: 275, y: 350 }
    },
    'cultural-diversity': {
      connections: ['education', 'technology', 'inequality'],
      position: { x: 425, y: 350 }
    }
  };

  let hoveredIssue: string | null = null;
  let selectedIssue: string | null = null;
  let selectedConnection: string | null = null;

  function handleIssueClick(issue: string) {
    if (selectedIssue === issue) {
      selectedIssue = null;
      selectedConnection = null;
    } else {
      selectedIssue = issue;
      selectedConnection = null;
    }
  }

  function handleConnectionClick(issue1: string, issue2: string, event: MouseEvent) {
    event.stopPropagation();
    selectedConnection = selectedConnection === `${issue1}-${issue2}` ? null : `${issue1}-${issue2}`;
  }

  function hasTooltip(issue1: string, issue2: string): boolean {
    const key = `issues.map.tooltips.${issue1}.${issue2}`;
    // Check if the translation key exists and isn't just returning the key itself
    const translation = $_(`issues.map.tooltips.${issue1}.${issue2}`);
    return translation !== key && translation !== '';
  }

  function isConnectionActive(issue1: string, issue2: string): boolean {
    // If there's a selected connection, only highlight that specific connection
    if (selectedConnection) {
      return selectedConnection === `${issue1}-${issue2}` || 
             selectedConnection === `${issue2}-${issue1}`;
    }
    
    // If there's a selected issue, highlight all its connections
    if (selectedIssue) {
      return (selectedIssue === issue1 && issues[issue1].connections.includes(issue2)) ||
             (selectedIssue === issue2 && issues[issue2].connections.includes(issue1));
    }
    
    // If no selection, highlight connections to the current page's issue
    return (currentIssue === issue1 && issues[issue1].connections.includes(issue2)) ||
           (currentIssue === issue2 && issues[issue2].connections.includes(issue1));
  }

  function getNodeClass(issue: string): string {
    let classes = "issue-node";
    
    if (issue === currentIssue) {
      classes += " current";
    }
    
    // Highlight node if it's the selected issue or connected to the selected issue
    if (selectedIssue) {
      if (issue === selectedIssue || 
          (issues[selectedIssue].connections.includes(issue))) {
        classes += " connected";
      }
    } else if (!selectedConnection) {
      // If no selection, highlight nodes connected to current page's issue
      if (issues[currentIssue].connections.includes(issue)) {
        classes += " connected";
      }
    }

    return classes;
  }

  function getConnectionClass(issue1: string, issue2: string): string {
    const isActive = isConnectionActive(issue1, issue2);
    const isHovered = hoveredIssue && (issue1 === hoveredIssue || issue2 === hoveredIssue);
    return `connection ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`;
  }

  let hoveredConnection: string | null = null;
  let tooltipPosition = { x: 0, y: 0 };

  function handleConnectionHover(issue1: string, issue2: string, event: MouseEvent) {
    // Only set hoveredConnection if we have a tooltip for this connection
    if (hasTooltip(issue1, issue2)) {
      hoveredConnection = `${issue1}-${issue2}`;
      updateTooltipPosition(event);
    }
  }

  function handleConnectionLeave() {
    hoveredConnection = null;
  }

  function updateTooltipPosition(event: MouseEvent) {
    const bounds = event.currentTarget.getBoundingClientRect();
    tooltipPosition = {
      x: event.clientX - bounds.left + 10,
      y: event.clientY - bounds.top - 10
    };
  }

  function getTooltipText(issue1: string, issue2: string): string {
    if (hasTooltip(issue1, issue2)) {
      return $_(`issues.map.tooltips.${issue1}.${issue2}`);
    }
    return '';
  }
</script>

<div class="relative w-full max-w-2xl mx-auto">
  <svg viewBox="0 0 550 500" class="w-full">
    <!-- Connections -->
    {#each Object.entries(issues) as [issue1, data1]}
      {#each data1.connections as issue2}
        {@const data2 = issues[issue2]}
        <g class="connection-group">
          <line
            x1={data1.position.x}
            y1={data1.position.y}
            x2={data2.position.x}
            y2={data2.position.y}
            class={getConnectionClass(issue1, issue2)}
            on:click={(e) => handleConnectionClick(issue1, issue2, e)}
            on:mousemove={(e) => handleConnectionHover(issue1, issue2, e)}
            on:mouseleave={handleConnectionLeave}
          />
          <!-- Invisible wider line for easier hovering -->
          <line
            x1={data1.position.x}
            y1={data1.position.y}
            x2={data2.position.x}
            y2={data2.position.y}
            class="connection-hover-area"
            on:mousemove={(e) => handleConnectionHover(issue1, issue2, e)}
            on:mouseleave={handleConnectionLeave}
          />
        </g>
      {/each}
    {/each}

    <!-- Issue Nodes -->
    {#each Object.entries(issues) as [issue, data]}
      <g
        transform="translate({data.position.x}, {data.position.y})"
        class={getNodeClass(issue)}
        on:mouseenter={() => hoveredIssue = issue}
        on:mouseleave={() => hoveredIssue = null}
        on:click={() => handleIssueClick(issue)}
      >
        <circle
          r="20"
          class="node-circle"
        />
        <text
          dy=".3em"
          class="node-text"
          text-anchor="middle"
        >
          {issue === currentIssue ? '•' : ''}
        </text>
      </g>
    {/each}
  </svg>

  <!-- Tooltip -->
  {#if hoveredConnection && !selectedConnection && !selectedIssue}
    {@const [issue1, issue2] = hoveredConnection.split('-')}
    {#if hasTooltip(issue1, issue2)}
      <div 
        class="absolute pointer-events-none bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm shadow-lg z-50 max-w-xs"
        style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px; transform: translate(-50%, -100%);"
      >
        <p class="font-medium mb-1">
          {$_(`issues.${issue1}.short_title`)} ↔ {$_(`issues.${issue2}.short_title`)}
        </p>
        <p class="text-gray-200 text-xs">
          {getTooltipText(issue1, issue2)}
        </p>
      </div>
    {/if}
  {/if}

  <!-- Connection Details Panel -->
  {#if selectedIssue || selectedConnection}
    <div class="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
      {#if selectedConnection}
        {@const [issue1, issue2] = selectedConnection.split('-')}
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {$_(`issues.${issue1}.short_title`)} ↔ {$_(`issues.${issue2}.short_title`)}
        </h4>
        <p class="text-gray-600 dark:text-gray-300">
          {$_(`issues.connections.${issue1}.${issue2}`)}
        </p>
      {:else if selectedIssue}
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
          {$_(`issues.${selectedIssue}.short_title`)}
        </h4>
        <p class="text-gray-600 dark:text-gray-300">
          {$_(`issues.connection_summaries.${selectedIssue}`)}
        </p>
        <h5 class="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3 mb-1">
          {$_('issues.map.connected_issues')}:
        </h5>
        <ul class="mt-2 space-y-1">
          {#each issues[selectedIssue].connections as connectedIssue}
            <li class="text-sm text-gray-500 dark:text-gray-400">
              • {$_(`issues.${connectedIssue}.short_title`)}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}

  <!-- Legend -->
  <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
    {#each Object.entries(issues) as [issue, data]}
      <div 
        class="flex items-center gap-2 {issue === currentIssue ? 'text-blue-600 dark:text-blue-400 font-medium' : 
               'text-gray-600 dark:text-gray-400'}"
      >
        <span class="w-2 h-2 rounded-full bg-current"></span>
        {$_(`issues.${issue}.short_title`)}
      </div>
    {/each}
  </div>
</div>

<style>
  .connection {
    stroke: #CBD5E1;
    stroke-width: 1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .connection.active {
    stroke: #3B82F6;
    stroke-width: 2;
  }

  .connection.hovered {
    stroke: #60A5FA;
    stroke-width: 2;
  }

  .issue-node {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .issue-node .node-circle {
    fill: #F1F5F9;
    stroke: #CBD5E1;
    stroke-width: 2;
    transition: all 0.2s ease-in-out;
  }

  .issue-node:hover .node-circle,
  .issue-node.current .node-circle {
    fill: #3B82F6;
    stroke: #2563EB;
  }

  .issue-node.connected .node-circle {
    fill: #BFDBFE;
    stroke: #3B82F6;
  }

  .node-text {
    fill: #1E293B;
    font-size: 12px;
  }

  :global(.dark) .connection {
    stroke: #475569;
  }

  :global(.dark) .issue-node .node-circle {
    fill: #1F2937;
    stroke: #475569;
  }

  :global(.dark) .issue-node.connected .node-circle {
    fill: #1E40AF;
    stroke: #3B82F6;
  }

  :global(.dark) .node-text {
    fill: #F1F5F9;
  }

  .connection-hover-area {
    stroke: transparent;
    stroke-width: 10px;
    pointer-events: all;
    cursor: pointer;
  }

  /* Add smooth transitions for tooltip */
  div[style*="transform"] {
    transition: top 0.1s ease-out, left 0.1s ease-out;
  }
</style>
