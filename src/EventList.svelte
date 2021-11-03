<script lang="ts">
  import type { Event } from './events'

  export let events: Event[]
</script>

<main>
  {#each events as event, _i}
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {event.time_and_place}
        </h6>
        <p class="card-text">{event.description}</p>
      </div>
    </div>
  {/each}
</main>

<style>
</style>
