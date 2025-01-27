<script>
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import { routes } from "./routes/index";
  export let url = "";
</script>

<div class="app-container">
  <Router {url}>
    <Header {routes} />
    <main class="main-content">
      <div class="content-wrapper">
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </main>
    <Footer />
  </Router>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .main-content {
    flex: 1;
    width: 100%;
  }

  .content-wrapper {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
</style>
