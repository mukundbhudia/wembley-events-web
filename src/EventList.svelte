<script lang="ts">
  import { onMount } from 'svelte'
  interface Event {
    date: Date
    time_and_place: string
    title: string
    description: string
  }

  let events: Array<Event>

  async function getCalendarEvents() {
    events = await fetch(
      `https://mukundbhudia.github.io/wembley-events/wembley-events.json`
    )
      .then((r) => r.json())
      .catch((e) => console.error(e))
    events.map((event) => {
      event.date = new Date(event.date)
    })
  }

  onMount(getCalendarEvents)
</script>

<main>
  {#if events}
    {#each events as event, _i}
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{event.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{event.time_and_place}</h6>
          <p class="card-text">{event.description}</p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="loading">Loading...</p>
  {/if}
</main>

<style>
</style>
