<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import { routes } from "./routes/index";
</script>

<Header {routes} />

<Router>
  <Route path="/" component={Home} />
</Router>

<Footer />
