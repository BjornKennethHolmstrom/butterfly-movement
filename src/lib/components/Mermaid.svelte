<!-- src/lib/components/Mermaid.svelte -->
<script lang="ts">
  import mermaid from 'mermaid';
  import { onMount } from 'svelte';

  export let diagram: string;
  export let config: any = {};

  let element: HTMLDivElement;

  onMount(async () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      ...config
    });

    await mermaid.run({
      nodes: [element]
    });
  });
</script>

<div bind:this={element} class="mermaid">
  {diagram}
</div>

<style>
  /* Add any custom styling for the diagram container */
  .mermaid {
    width: 100%;
    min-height: 200px;
  }

  :global(.mermaid svg) {
    max-width: 100%;
    height: auto;
  }
</style>
