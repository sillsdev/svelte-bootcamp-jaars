<script>
    import { queryPk } from '$lib/scripts/queryPk';

    export let docSet = "";
    export let book = "";
    export let chapter = "";

    $: promise = queryPk(`{
        docSet(id:"${docSet}") {
            document(bookCode: "${book}") {
                title: header(id: "toc2")
                mainSequence {
                    blocks(withScriptureCV: "${chapter}") {
                        bs { payload }
                        items { type subType payload }
                    }
                }
            }
        }
    }`);
    /*
    function renderChapter(data) {
        const blocks = JSON.parse(data).data.docSet?.document?.mainSequence.blocks;
        if(!blocks) return "waiting on Proskomma...";
        let rendered = "";
        for(let i = 0; i < blocks.length; i++)
            rendered += `<div class="${i === 0?"m":"p"}">${renderBlock(blocks[i])}</div>`
        return rendered;
    }
    
    function renderBlock(block) {
        let rendered = "";
        for(let i = 0; i < block.items.length; i++) {
            var item = block.items[i];
            if(item.type === "scope" && item.subType === "start") {
                var payload = item.payload.split("/")
                if(payload[0] === "verses") {
                    rendered += `<em id="${payload[1]}">${payload[1]}</em><span>&nbsp;</span>`
                } else {
                    //rendered += `<pre>--${item.type+":"+item.subType+" > "+payload}</pre>`
                }
            }else if(item.type === "token") {
                rendered += `${item.payload}`
            }
        }

        return rendered;
    }*/
</script>

<article class="prose mx-auto">
    {#await promise}
        <p>...waiting</p>
    {:then data}
        <h1>{JSON.parse(data).data.docSet?.document?.title}</h1>
        <h2>Chapter: {chapter}</h2>
        {#if Array.isArray(JSON.parse(data).data.docSet?.document?.mainSequence.blocks)}
            {#each JSON.parse(data).data.docSet?.document?.mainSequence.blocks as block, i}
                <div class="{i === 0?"m":"p"}">
                    {#each block.items as item}
                        {#if item.type === "scope" && item.subType === "start"}
                            {#if item.payload.split("/")[0] === "verses"}
                                <em id="{item.payload.split("/")[1]}">{item.payload.split("/")[1]}</em><span>&nbsp;</span>
                            {:else}
                                <span></span>
                            {/if}
                        {:else if item.type === "token"}
                            {item.payload}
                        {/if}
                    {/each}
                </div>
            {/each}
        {:else}
            <p>waiting on Proskomma...</p>
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</article>