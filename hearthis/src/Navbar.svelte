<script>
  import { location, link } from "svelte-spa-router";
  import { projects } from "./stores.js";
  $: project = $projects.find((p) => p.id === $location.split("/")[1]);
  $: projectName = project ? project.name + " Project" : "";

  let pages = [
    { url: "record", label: "Record" },
    { url: "check", label: "Check" },
    { url: "settings", label: "Settings" },
    { url: "publish", label: "Publish" },
  ];
</script>

<div>
  <h3>{projectName} HearThis 4.0.0</h3>
  <ul>
    <li><a href="/">Home</a></li>
    {#if project}
      {#each pages as page}
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a use:link={`/${project.id}/${page.url}`}>{page.label}</a>
        </li>
      {/each}
    {/if}
  </ul>
</div>

{#if project}
  <pre>{JSON.stringify(project, null, 2)}</pre>
{/if}

<style>
  div {
    display: flex;
    justify-content: space-between;
  }

  div ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }

  li {
    padding-right: 1rem;
  }

  code {
    background-color: aquamarine;
  }
</style>
