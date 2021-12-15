# wembley-events-web

[![Checks](https://github.com/mukundbhudia/wembley-events-web/actions/workflows/checks.yml/badge.svg)](https://github.com/mukundbhudia/wembley-events-web/actions/workflows/checks.yml)
[![Release](https://github.com/mukundbhudia/wembley-events-web/actions/workflows/release.yml/badge.svg)](https://github.com/mukundbhudia/wembley-events-web/actions/workflows/release.yml)


Know when Wembley Stadium events are happening ahead of time. 
This project shows all the upcoming events at Wembley Stadium.
 - Don't get caught out in the traffic.
 - Don't struggle with parking.
 - Don't waste precious time.


The calendar is updated regularly and is always available to subscribe to/download here: **https://wembleyevents.mukund.uk/**.

This project is powered by the [wembley-events](https://github.com/mukundbhudia/wembley-events) project.

![Wembley Events Web home page](https://github.com/mukundbhudia/wembley-events-web/raw/main/screenshots/home.png)

## Pre-requisites

- Node.js
- Run `npm install` to install all the dependencies before developing.

## Development

- Run `npm run dev` to build the project & run the development server
- Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
- By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Production

- Run `npm run build`

## Testing

- To run **all** your tests, within the repo directory run `npm test`. This will run all tests in any directories that match the filters described in `jest` in `package.json`.

## Resources & Thanks

- [Brent Council events](https://www.brent.gov.uk/events-and-whats-on-calendar/).
