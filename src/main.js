import { mount } from 'svelte'
import { Router } from "svelte-routing"
import './app.css'
import './styles/global.css'
import App from './App.svelte'

mount(App, {
  target: document.body,
  props: {
    url: window.location.pathname
  }
})

export default App
