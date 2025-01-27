<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import { routes } from "./routes/index";
  export let url = "";
</script>

<Router {url}>
  <Header {routes} />
  <Route path="/" component={Home} />
  <Footer />
</Router>
