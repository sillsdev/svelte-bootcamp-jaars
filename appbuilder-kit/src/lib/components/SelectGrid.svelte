<script>
    export let options = [""];
    const cols = 5;
    $: rows = Math.ceil(options.length / cols);
</script>

<table>
    {#each Array(rows) as _, ri}
        <tr>
            {#each Array(cols) as _, ci}
                {#if ri*cols + ci < options.length}
                    <td><span class="content btn btn-ghost p-0">{options[ri*cols + ci]}</span></td>
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
        margin: 0px;
        padding: 0px;
        position: relative;
    }
    td:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
    td .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .box {
        width:100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        align-content: center;
        border-radius: 0;
    }
</style>