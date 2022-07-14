<script>
    import { queryPk } from '$lib/scripts/queryPk';
    import { onDestroy } from 'svelte';
    import { refs, scrolls } from "../data/stores";
    import { inview } from 'svelte-inview';

    export let refKey = "default";
    export let scrollGroup = "default"
    export let viewId = ""

    let removeKeys = [refs.addKey(refKey), scrolls.addKey(scrollGroup)]
    const changeKeys = (/**@type{string[]}*/keys, /**@type{any[]}*/stores) => {
        for(let i = 0; i < keys.length; i++) {
            removeKeys[i]()
            removeKeys[i] = stores[i].addKey(keys[i])
        }  
    }
    $: changeKeys([refKey, scrollGroup], [refs, scrolls])

    /**@type{HTMLElement}*/let container;
    const scroll = (/**@type{string}*/id) => {
        let els = container?.getElementsByClassName("scroll-item")
        let el = els?.namedItem(id)
        //console.log(el)
        el?.scrollIntoView()
    }
    $: scroll($scrolls[scrollGroup]+"-"+viewId)
    //$: console.log($scrolls[scrollGroup]+"-"+viewId)

    /**@type{any[]}*/let versesInView = []

    const handleEnter = (/**@type{CustomEvent<ObserverEventDetails>}*/e, /**@type{string}*/id) => {
        versesInView.push(id)
        versesInView.sort((a,b) => {
            if(a === "title") return -1
            return a - b
        })
    }

    const handleLeave = (/**@type{CustomEvent<ObserverEventDetails>}*/e, /**@type{string}*/id) => {
        versesInView = versesInView.filter(v => v !== id)
        if(versesInView.length > 0) $scrolls = {key: scrollGroup, val: versesInView[0]}
    }

    $: promise = queryPk(`{
        docSet(id:"${$refs[refKey].docSet}") {
            document(bookCode: "${$refs[refKey].book}") {
                mainSequence {
                    blocks(withScriptureCV: "${$refs[refKey].chapter}") {
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
    onDestroy(() => removeKeys.forEach(rk => rk()))
</script>

<article class="prose mx-auto" bind:this={container}>
    {#await promise}
        <p>...waiting</p>
    {:then data}
        <h1 id="title-{viewId}"
            class="scroll-item"
            use:inview
            on:enter={(e) => handleEnter(e, "title")}
            on:leave={(e) => handleLeave(e, "title")}
        >{$refs[refKey].title}</h1>
        <h2>Chapter: {$refs[refKey].chapter}</h2>
        {#if Array.isArray(JSON.parse(data).data.docSet?.document?.mainSequence.blocks)}
            {#each JSON.parse(data).data.docSet?.document?.mainSequence.blocks as block, i}
                <div class="{i === 0?"m":"p"}">
                    {#each block.items as item}
                        {#if item.type === "scope" && item.subType === "start"}
                            {#if item.payload.split("/")[0] === "verses"}
                                <em id="{item.payload.split("/")[1]}-{viewId}"
                                    class="scroll-item"
                                    use:inview
                                    on:enter={(e) => handleEnter(e, item.payload.split("/")[1])}
                                    on:leave={(e) => handleLeave(e, item.payload.split("/")[1])}
                                >{item.payload.split("/")[1]}</em><span>&nbsp;</span>
                            {:else}
                                <!---->
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