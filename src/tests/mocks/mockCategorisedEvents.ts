/* eslint-disable quotes */
import type { CategorisedEvents } from '../../events'

const mockCategorisedEvents: CategorisedEvents = {
  past: [
    {
      date: new Date('19 Jun 2022'),
      time: 'Sun, Jun 19',
      place: 'Club Wembley',
      title: 'Harry Styles',
      description:
        'Multi-platinum recording artist Harry Styles announces the rescheduled dates for his world tour, in addition to new shows added across the globe. Styles will kick off his colossal 32-city outing...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('19 Jun 2022'),
      time: 'Wed, Jun 15 – Sun, Jun 19',
      place: 'Wembley Stadium',
      title: 'Harry Styles Love On Tour',
      description:
        'Countdown to Harry Styles Show 1 taking place on Wednesday, June 15, 4:00 PM. Sir Matt Busby Way, Manchester, England, M16 0RA, United Kingdom.',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('29 Jun 2022'),
      time: 'Wed, 4:30 – 8:30 PM',
      place: 'Wembley Stadium',
      title: 'Dylan @ Wembley Stadium',
      description:
        'span Ed Sheeran has announced the first leg of his ‘+ - = ÷ x Tour’ (pronounced ‘The Mathematics Tour’) , taking place in stadiums throughout 2022. Kicking off in April next year, the tour will...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('1 Jul 2022'),
      time: 'Fri, 9 AM – 1 PM',
      place: 'Wembley Stadium',
      title: 'Ed Sheeran + - = ÷ x Tour',
      description:
        'span Ed Sheeran has announced the first leg of his ‘+ - = ÷ x Tour’ (pronounced ‘The Mathematics Tour’) , taking place in stadiums throughout 2022. Kicking off in April next year, the tour will...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('26 Jun 2022'),
      time: 'Sun, 7 – 9 PM',
      place: 'The SSE Arena, Wembley',
      title: 'Jubin Nautiyal - RESCHEDULED',
      description:
        'Please be advised that Wembley Arena seating is divided into bays: - Blocks A and B are not raked and other customers may stand during the performance. - Blocks C and D are tiered behind these. ...',
      link: 'https://www.example.com/',
    },
  ],
  today: [],
  total: 10,
  upcoming: [
    {
      date: new Date('20 Aug 2022'),
      time: 'Sat, 5 – 9 PM',
      place: 'Wembley Stadium',
      title: 'Coldplay: Music of the Spheres World Tour',
      description:
        'Global super pop rock band Coldplay will be hitting the road on tour in 2022 and will be performing live on stage in their Music of the Spheres World Tour ! This particular live concert is...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('16 Aug 2022'),
      time: 'Tue, 5 – 9 PM',
      place: 'Wembley Stadium',
      title: 'Coldplay @ Wembley Stadium',
      description:
        'Global super pop rock band Coldplay will be hitting the road on tour in 2022 and will be performing live on stage in their Music of the Spheres World Tour ! This particular live concert is...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('6 Aug 2022'),
      time: 'Sat, Aug 6 – Sun, Aug 7',
      place: 'Best Western Palm Hotel',
      title: 'Westlife at Wembley',
      description:
        'Westlife first broke into the charts with their debut single Swear It Again. Released in April 1999, the song peaked at No.1 on the Official UK Singles Chart where it remained for two weeks. The...',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('27 Aug 2022'),
      time: 'Sat, 7 – 11 PM',
      place: 'The SSE Arena, Wembley',
      title: 'Celebrating Africa',
      description:
        'Buy Celebrating Africa tickets and sign-up for latest tour alerts. Find Celebrating Africa tour dates, reviews, times and event details.',
      link: 'https://www.example.com/',
    },
    {
      date: new Date('28 Aug 2022'),
      time: 'Sun, 7:30 – 9:30 PM',
      place: 'The SSE Arena, Wembley',
      title: 'Neha Kakkar - RESCHEDULED',
      description:
        'Please be advised that Wembley Arena seating is divided into bays: - Blocks A and B are not raked and other customers may stand during the performance. - Blocks C and D are tiered behind these. ...',
      link: 'https://www.example.com/',
    },
  ],
}

export { mockCategorisedEvents }
