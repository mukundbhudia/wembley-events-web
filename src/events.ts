export interface Event {
  date: Date
  time: string
  place: string
  title: string
  description: string
  link: string
}

export interface CategorisedEvents {
  today: Event[]
  past: Event[]
  upcoming: Event[]
  total: number
}

const enum Category {
  Today = 'today',
  Past = 'past',
  Upcoming = 'upcoming',
}

export async function getEventsFromUrl(url: string): Promise<Event[]> {
  return await fetch(url)
    .then((r): Promise<Event[]> => r.json())
    .catch((e) => {
      console.error(e)
      return []
    })
}

function isDateInFuturePastOrPresent(firstDate: Date, secondDate: Date) {
  if (firstDate.setHours(0, 0, 0, 0) < secondDate.setHours(0, 0, 0, 0)) {
    return Category.Past
  } else if (
    firstDate.setHours(0, 0, 0, 0) === secondDate.setHours(0, 0, 0, 0)
  ) {
    return Category.Today
  } else {
    return Category.Upcoming
  }
}

export function categoriseEventsByDate(events: Array<Event>) {
  const today = new Date()
  const eventsByDate: CategorisedEvents = {
    today: [],
    past: [],
    upcoming: [],
    total: events.length,
  }

  events.forEach((event) => {
    const category = isDateInFuturePastOrPresent(event.date, today)
    eventsByDate[category].push(event)
  })

  return eventsByDate
}
