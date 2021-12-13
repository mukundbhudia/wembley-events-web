/* eslint-disable quotes */
import type { CategorisedEvents } from '../../events'

const mockCategorisedEvents: CategorisedEvents = {
  past: [
    {
      date: new Date('26 June 2021'),
      time_and_place:
        '26 June 2021, 8pm to 12am, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - Round of 16: Italy v Austria',
      description:
        'Round of 16: 1A v 2C takes place on Saturday 26 June 2021. Kick off is at 8pm and parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('29 June 2021'),
      time_and_place:
        '29 June 2021, Kick off: 5pm, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - Round of 16: England v Germany',
      description:
        'Round of 16: 1D v 2F takes place on Tuesday 29 June 2021. Kick off is at 5pm and parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('06 July 2021'),
      time_and_place:
        '6 July 2021, 8pm to 12am, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - UEFA Euro 2020: Italy v Spain',
      description:
        'The first semi-final between Italy and Spain takes place on Tuesday 6 July 2021. Kick off is 8pm and parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('07 July 2021'),
      time_and_place:
        '7 July 2021, 8pm to 12am, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - UEFA Euro 2020: England v Denmark',
      description:
        'The second semi-final between England and Denmark takes place on Wednesday 7 July 2021. Kick off is 8pm and parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('17 July 2021'),
      time_and_place:
        '17 July 2021, Kick off: 12pm, Wembley Stadium, Wembley, London HA9 0WS',
      title:
        'Wembley Stadium event - The Betfred Challenge Cup Final between Castleford Tigers and St Helens',
      description:
        'The Betfred Challenge Cup Final between Castleford Tigers and St Helens will take place on Saturday 17 July 2021 at Wembley Stadium. Event day parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('12 October 2021'),
      time_and_place:
        '12 October 2021, 7:45pm, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - England v Hungary',
      description:
        'Qatar 2022 World Cup Qualifier takes place on Tuesday, 12 October 2021. Event day parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('23 October 2021'),
      time_and_place:
        '23 October 2021, 5:15pm, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Wembley Stadium event - England Women v Northern Ireland',
      description:
        'FIFA Women’s World Cup 2023 Qualifier takes place on Saturday 23 October 2021 at 5:15pm. Event day parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('12 November 2021'),
      time_and_place:
        '12 November 2021, 7:45pm to 12am, Wembley Stadium, Wembley, London HA9 0WS',
      title: 'Qatar 2022 World Cup Qualifier: England v Albania',
      description:
        'England will face Albania in Qatar 2022 World Cup Qualifier at Wembley on Friday 12 November 2021 at 7:45pm. Event day parking restrictions will be in place until midnight.',
    },
    {
      date: new Date('05 December 2021'),
      time_and_place:
        '5 December 2021, TBC, Wembley Stadium, Wembley, London HA9 0WS',
      title: "Wembley Stadium event - The women's FA cup final",
      description:
        "The women's FA cup final takes place on Sunday 5 December 2021. Event day parking restrictions will be in place until midnight.",
    },
  ],
  today: [],
  total: 9,
  upcoming: [],
}

export { mockCategorisedEvents }
