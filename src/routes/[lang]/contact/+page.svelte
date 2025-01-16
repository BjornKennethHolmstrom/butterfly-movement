<!-- src/routes/[lang]/contact/+page.svelte -->
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Head from '$lib/components/Head.svelte';
  import { Mail, MessageCircle, Send } from 'lucide-svelte';

  let isSubmitting = false;
  let isSubmitted = false;
  let error = '';

  // Replace this with your Formspree form ID
  const FORMSPREE_FORM_ID = 'xnnnyqrz';

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    isSubmitting = true;
    error = '';

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        isSubmitted = true;
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (e) {
      error = 'There was an error submitting the form. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<Head
  title={$_('contact.meta.title')}
  description={$_('contact.meta.description')}
/>

<div class="min-h-screen bg-white dark:bg-gray-900">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
      {$_('contact.title')}
    </h1>

    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-8">
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="flex items-start space-x-4">
          <Mail class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
          <div>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Email</h2>
            <p class="text-gray-600 dark:text-gray-300">
              We'll respond within 24-48 hours
            </p>
          </div>
        </div>
        <div class="flex items-start space-x-4">
          <MessageCircle class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
          <div>
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Discord</h2>
            <p class="text-gray-600 dark:text-gray-300">
              Join our community for real-time discussions
            </p>
          </div>
        </div>
      </div>

      {#if isSubmitted}
        <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
          <p class="text-green-800 dark:text-green-200">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      {:else}
        <form on:submit={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {#if error}
            <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
              <p class="text-red-800 dark:text-red-200">{error}</p>
            </div>
          {/if}

          <button
            type="submit"
            disabled={isSubmitting}
            class="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {#if isSubmitting}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            {:else}
              <Send class="w-5 h-5 mr-2" />
              Send Message
            {/if}
          </button>
        </form>
      {/if}
    </div>
  </div>
</div>
