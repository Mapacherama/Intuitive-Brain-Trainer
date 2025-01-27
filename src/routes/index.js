import Home from "../pages/Home.svelte";
import About from "../pages/About.svelte";
import Reflections from "../pages/Reflections.svelte";

export const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/reflections", component: Reflections },
];