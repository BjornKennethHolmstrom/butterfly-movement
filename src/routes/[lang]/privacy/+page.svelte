<!-- src/routes/[lang]/privacy/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
</script>

<Head
  title={$_('privacy.meta.title')}
  description={$_('privacy.meta.description')}
/>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
      {$_('privacy.title')}
    </h1>
    <div class="prose dark:prose-invert max-w-none">
      <p class="mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect minimal personal information necessary for communication and community participation:
      </p>
      <ul>
        <li>Email addresses (when voluntarily provided)</li>
        <li>Information you choose to share in our Discord community</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>
        We use collected information to:
      </p>
      <ul>
        <li>Communicate updates about The Butterfly Movement</li>
        <li>Respond to your inquiries</li>
        <li>Improve our services and community engagement</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell or share your personal information with third parties. Information shared in public forums (like Discord) is visible to other community members.
      </p>

      <h2>4. Data Protection</h2>
      <p>
        We implement reasonable security measures to protect your information. However, no internet transmission is completely secure.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access your personal information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of communications</li>
      </ul>

      <h2>6. Contact Us</h2>
      <p>
        For privacy-related questions, please contact us through our contact form.
      </p>
    </div>
  </div>
</div>
