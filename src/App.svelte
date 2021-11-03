<script lang="ts">
  import Header from './Header.svelte'
  import EventList from './Events.svelte'

  export let title: string
</script>

<main>
  <div class="container py-4">
    <h1>{title}</h1>
    <Header />
    <EventList />
  </div>
</main>

<style>
  h1 {
    color: #371488;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
