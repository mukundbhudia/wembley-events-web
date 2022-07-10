<script lang="ts">
  import { onMount } from 'svelte'
  import { getEventsFromUrl, categoriseEventsByDate } from './events'
  import type { Event, CategorisedEvents } from './events'

  import EventList from './EventList.svelte'

  let events: CategorisedEvents = {
    today: [],
    past: [],
    upcoming: [],
    total: 0,
  }

  async function getCalendarEvents() {
    let eventsFromCalendar: Array<Event> = await getEventsFromUrl(
      'https://mukundbhudia.github.io/wembley-events/wembley-events.json'
    )
    eventsFromCalendar.map((event) => {
      event.date = new Date(event.date)
    })
    eventsFromCalendar.sort((eventA, eventB) => {
      return eventA.date.setHours(0, 0, 0, 0) - eventB.date.setHours(0, 0, 0, 0)
    })

    events = categoriseEventsByDate(eventsFromCalendar)
  }

  onMount(getCalendarEvents)
</script>

<main>
  {#if events.total > 0}
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Past events ({events.past.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <h4>Past events</h4>
            <EventList events={events.past} />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Events today ({events.today.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            {#if events.today.length > 0}
              <h4>Events today</h4>
              <EventList events={events.today} />
            {:else}
              <h4>No events today</h4>
            {/if}
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Upcoming events ({events.upcoming.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse show"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <h4>Upcoming events</h4>
            <EventList events={events.upcoming} />
          </div>
        </div>
      </div>
    </div>
  {:else}
    <div class="d-flex justify-content-center">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  {/if}
</main>

<style>
</style>
