<script>
    import { createEventDispatcher } from "svelte";
    export let options = [""];
    const cols = 5;
    const dispatch = createEventDispatcher();
    $: rows = Math.ceil(options.length / cols);
    /**
    * @param {string} opt
    */
    function handleClick(opt) {
        dispatch('menuaction', {
            text: opt
        });
    }
</script>

<table>
    {#each Array(rows) as _, ri}
        <tr>
            {#each Array(cols) as _, ci}
                {#if ri*cols + ci < options.length}
                    <td><span on:click={() => handleClick(options[ri*cols + ci])} class="dy-btn dy-btn-square dy-btn-ghost p-0 m-0">{options[ri*cols + ci]}</span></td>
                {/if}
            {/each}
        </tr>
    {/each}
</table>

<style>
    table {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
        border-radius: 5px;
    }

    tr {
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
    td {
        text-align:left;
        overflow:hidden;
        margin: 0px;
        padding: 0px;
        position: relative;
    }
</style>