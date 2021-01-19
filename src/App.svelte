<script>
  import Smoke from './Smoke.svelte';

  let input;
</script>

{#if input === 'smoke2020'}
  <Smoke />
{:else}
  <input bind:value={input} />
{/if}

<style>
  input {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
</style>
