<script lang="ts">
  import Navbar from "./Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";

  let Pages = [
    { url: "/", label: "Project" },
    { url: "/#/record", label: "Record" },
    { url: "/#/check", label: "Check" },
    { url: "/#/settings", label: "Settings" },
    { url: "/#/publish", label: "Publish" },
  ];
</script>

<Navbar navlists={Pages} />

<main>
  <Router {routes} />
</main>

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
