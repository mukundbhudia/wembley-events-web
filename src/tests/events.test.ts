import mockEvents from './mocks/mockEvents.json'
import { mockCategorisedEvents } from './mocks/mockCategorisedEvents'

import type { CategorisedEvents, Event } from '../events'
import { categoriseEventsByDate } from '../events'

test('should categorise events correctly', () => {
  const mockExpectedCategorisedEvents: CategorisedEvents = mockCategorisedEvents
  const mockEventsFromCalendar: Array<Event> = mockEvents.map((event) => {
    return {
      date: new Date(event.date),
      time: event.time,
      place: event.place,
      title: event.title,
      description: event.description,
    }
  })

  expect(categoriseEventsByDate(mockEventsFromCalendar)).toStrictEqual(
    mockExpectedCategorisedEvents
  )
})

test('should categorise no events correctly', () => {
  const mockEventsFromCalendar: Array<Event> = []
  const mockExpectedCategorisedEvents: CategorisedEvents = {
    today: [],
    past: [],
    upcoming: [],
    total: 0,
  }

  expect(categoriseEventsByDate(mockEventsFromCalendar)).toStrictEqual(
    mockExpectedCategorisedEvents
  )
})

test('should categorise events with same date correctly', () => {
  const mockEventsFromCalendar: Array<Event> = [
    {
      date: new Date('26 June 2021'),
      time: '26 June 2021',
      place: '',
      title: 'Something',
      description: 'Some description',
    },
    {
      date: new Date('26 June 2021'),
      time: '26 June 2021',
      place: '',
      title: 'Something else',
      description: 'Some other description',
    },
  ]

  const mockExpectedCategorisedEvents: CategorisedEvents = {
    today: [],
    past: [
      {
        date: new Date('26 June 2021'),
        time: '26 June 2021',
        place: '',
        title: 'Something',
        description: 'Some description',
      },
      {
        date: new Date('26 June 2021'),
        time: '26 June 2021',
        place: '',
        title: 'Something else',
        description: 'Some other description',
      },
    ],
    upcoming: [],
    total: 2,
  }

  const actualCategorisedEvents = categoriseEventsByDate(mockEventsFromCalendar)

  expect(actualCategorisedEvents).toStrictEqual(mockExpectedCategorisedEvents)
  expect(actualCategorisedEvents.past.length).toBe(2)
  expect(actualCategorisedEvents.past[0].date).toEqual(
    actualCategorisedEvents.past[1].date
  )
})

test('should categorise events in past present and future correctly', () => {
  const today = new Date()
  const mockEventsFromCalendar: Array<Event> = [
    {
      date: new Date('26 June 2020'),
      time: '26 June 2020',
      place: '',
      title: 'Something',
      description: 'Some description',
    },
    {
      date: today,
      time: '26 June 2021',
      place: '',
      title: 'Something else',
      description: 'Some other description',
    },
    {
      date: new Date('26 June 3000'),
      time: '26 June 3000',
      place: '',
      title: 'Something else else',
      description: 'Some other other description',
    },
  ]

  const mockExpectedCategorisedEvents: CategorisedEvents = {
    today: [
      {
        date: today,
        time: '26 June 2021',
        place: '',
        title: 'Something else',
        description: 'Some other description',
      },
    ],
    past: [
      {
        date: new Date('26 June 2020'),
        time: '26 June 2020',
        place: '',
        title: 'Something',
        description: 'Some description',
      },
    ],
    upcoming: [
      {
        date: new Date('26 June 3000'),
        time: '26 June 3000',
        place: '',
        title: 'Something else else',
        description: 'Some other other description',
      },
    ],
    total: 3,
  }

  const actualCategorisedEvents = categoriseEventsByDate(mockEventsFromCalendar)

  expect(actualCategorisedEvents).toStrictEqual(mockExpectedCategorisedEvents)
  expect(actualCategorisedEvents.past.length).toBe(1)
  expect(actualCategorisedEvents.today.length).toBe(1)
  expect(actualCategorisedEvents.upcoming.length).toBe(1)
  expect(actualCategorisedEvents.total).toBe(3)
})
