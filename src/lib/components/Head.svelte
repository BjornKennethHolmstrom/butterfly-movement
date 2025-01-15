<!-- src/lib/components/Head.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { locale } from 'svelte-i18n';

  export let title: string;
  export let description: string;
  export let image = '/og-image.jpg'; // default social image
  
  $: alternateUrls = ['en', 'sv'].map(lang => ({
    lang,
    url: `${$page.url.origin}/${lang}${$page.url.pathname}`
  }));
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph / Social -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  
  <!-- Language alternates -->
  {#each alternateUrls as { lang, url }}
    <link
      rel="alternate"
      hreflang={lang}
      href={url}
    />
  {/each}
  <link
    rel="canonical"
    href={`${$page.url.origin}/${$locale}${$page.url.pathname}`}
  />
</svelte:head>
