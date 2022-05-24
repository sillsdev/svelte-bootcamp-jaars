<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Router, { params } from "svelte-spa-router";
  import routes from "./routes";
  import { projects } from "./stores";
  import { onMount } from "svelte";

  onMount(async () => {
    // const endpoint = "TODO raw github url";
    // const response = await fetch(endpoint);
    // $projects = await response.json();
    $projects = [
      {
        id: "es",
        name: "Spanish",
      },
      {
        id: "en",
        name: "English",
      },
      {
        id: "th",
        name: "Thai",
      },
    ];
  });
</script>

<Navbar />

<main>
  <Router {routes} />
</main>

<footer>
  {#if $params}
    URL variables: <pre>{JSON.stringify($params)}</pre>
  {/if}
</footer>

<style>
  main {
		background-color: black;
    text-align: left;
    color: white;
    padding: 1em;
    padding-top: 0;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
