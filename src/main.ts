import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    title: 'Wembley Events Calendar',
  },
})

export default app
