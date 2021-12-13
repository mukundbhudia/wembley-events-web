import mockEvents from './mocks/mockEvents.json'
import { mockCategorisedEvents } from './mocks/mockCategorisedEvents'
import { CategorisedEvents, categoriseEventsByDate, Event } from '../events'

test('should categorise events correctly', () => {
  const categorisedEvents: CategorisedEvents = mockCategorisedEvents

  const eventsFromCalendar: Array<Event> = mockEvents.map((event) => {
    return {
      date: new Date(event.date),
      time_and_place: event.time_and_place,
      title: event.title,
      description: event.description,
    }
  })
  expect(categoriseEventsByDate(eventsFromCalendar)).toEqual(categorisedEvents)
})
