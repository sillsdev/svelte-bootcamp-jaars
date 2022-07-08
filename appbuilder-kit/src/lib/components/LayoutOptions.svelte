<script>
    import { onMount, onDestroy } from "svelte";
    import { queryPk } from "$lib/scripts/queryPk";
    import { docSets, viewMode } from "$lib/data/stores";

    export let layoutOption = "";

    let docSetList = [""];

    onMount(async () => {
        const data = JSON.parse(await queryPk("{docSets{id}}")).data;
        docSetList = data.docSets.map(d => d.id);
    })
</script>

<div class="w-60 p-2">
{#if layoutOption === "Side By Side"}
    <p><strong>Side By Side</strong></p>
    <ul class="dy-menu mx-auto">
        {#each docSetList as d}
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={() => $docSets["next"] = d}
                class="{$docSets["next"] === d? "dy-active":""}">{d}
            </a></li>
        {/each}
    </ul>
{:else if layoutOption === "Verse By Verse"}
    <p><strong>Verse By Verse</strong></p>
    <ul class="dy-menu mx-auto">
        {#each docSetList as d}
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={() => $docSets["next"] = d}
                class="{$docSets["next"] === d? "dy-active":""}">{d}
            </a></li>
        {/each}
    </ul>
{:else if layoutOption === "Single Pane"}
    <p><strong>Single Pane</strong></p>
    <ul class="dy-menu mx-auto">
        {#each docSetList as d}
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a on:click={() => $docSets["next"] = d}
                class="{$docSets["next"] === d? "dy-active":""}">{d}
            </a></li>
        {/each}
    </ul>
{/if}
</div>