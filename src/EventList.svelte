<script lang="ts">
  import type { Event } from './events'

  export let events: Event[]

  let eventsWithDate = events.map((wembley_event) => ({
    dateAsString: wembley_event.date.toLocaleDateString(),
    ...wembley_event,
  }))
</script>

<main>
  {#each eventsWithDate as event, _i}
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{event.title}</h5>
        <h6 class="card-subtitle mb-2">{event.place}</h6>
        <h6 class="card-subtitle mb-2 text-muted">
          {event.time} | {event.dateAsString}
        </h6>
        <p class="card-text">{event.description}</p>
        {#if event.link}
          <a
            type="button"
            href={event.link}
            rel="noopener"
            target="_blank"
            class="btn btn-outline-primary btn-sm">See more »</a
          >
        {/if}
      </div>
    </div>
  {/each}
</main>

<style>
</style>
