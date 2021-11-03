export interface Event {
  date: Date
  time_and_place: string
  title: string
  description: string
}

export interface CategorisedEvents {
  today: Event[]
  past: Event[]
  upcoming: Event[]
  total: number
}

export const enum Category {
  Today = 'today',
  Past = 'past',
  Upcoming = 'upcoming',
}