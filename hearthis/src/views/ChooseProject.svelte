<script lang="ts">
  import { link } from "svelte-spa-router";
  import { projects } from "../stores.js";
</script>

<h1>Choose a Project</h1>
<ul>
  {#each $projects as project}
    <li><a use:link={`/${project.id}/record`}>{project.name}</a></li>
  {/each}
</ul>
