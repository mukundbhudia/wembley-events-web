<script lang="ts">
  import { onMount } from 'svelte'
  import { Category } from './events'
  import type { Event, CategorisedEvents } from './events'

  import EventList from './EventList.svelte'

  let categorisedEvents: CategorisedEvents = {
    today: [],
    past: [],
    upcoming: [],
    total: 0,
  }

  async function getEventsFromUrl(url: string): Promise<Event[]> {
    return await fetch(url)
      .then((r): Promise<Event[]> => r.json())
      .catch((e) => {
        console.error(e)
        return []
      })
  }

  async function getCalendarEvents() {
    let events: Array<Event> = await getEventsFromUrl(
      'https://mukundbhudia.github.io/wembley-events/wembley-events.json'
    )
    events.map((event) => {
      event.date = new Date(event.date)
    })

    categorisedEvents = categoriseEventsByDate(events)
  }

  function isDateInFuturePastOrPresent(firstDate: Date, secondDate: Date) {
    if (firstDate.setHours(0, 0, 0, 0) < secondDate.setHours(0, 0, 0, 0)) {
      return Category.Upcoming
    } else if (
      firstDate.setHours(0, 0, 0, 0) === secondDate.setHours(0, 0, 0, 0)
    ) {
      return Category.Today
    } else {
      return Category.Past
    }
  }

  function categoriseEventsByDate(events: Array<Event>) {
    const today = new Date()
    const eventsByDate: CategorisedEvents = {
      today: [],
      past: [],
      upcoming: [],
      total: events.length,
    }

    events.forEach((event) => {
      const category = isDateInFuturePastOrPresent(today, event.date)
      eventsByDate[category].push(event)
    })

    return eventsByDate
  }

  onMount(getCalendarEvents)
</script>

<main>
  {#if categorisedEvents.total > 0}
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
            Past events ({categorisedEvents.past.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <h4>Past events</h4>
            <EventList events={categorisedEvents.past} />
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
            Events today ({categorisedEvents.today.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            {#if categorisedEvents.today.length > 0}
              <h4>Events today</h4>
              <EventList events={categorisedEvents.today} />
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
            Upcoming events ({categorisedEvents.upcoming.length})
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse show"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <h4>Upcoming events</h4>
            <EventList events={categorisedEvents.upcoming} />
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
