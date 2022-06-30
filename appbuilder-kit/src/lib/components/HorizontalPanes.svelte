<script lang="ts">
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";
    import { HSplitPane } from "svelte-split-pane";

    let heights: number[] = [];
    let scrolls: number[] = [0, 0];
    let slots: any[] = [];
    let offs: number[] = [];
    $: max = [heights[0]-offs[0], heights[1]-offs[1]]

    function handleScroll(index: number) {
        scrolls[index] = slots[index].scrollTop;
        scrolls[1-index] = scrolls[index]*((max[1-index])/(max[index]));
        if(Math.abs(scrolls[1-index] - slots[1-index].scrollTop) > 1) {
            slots[1-index].scrollTop = scrolls[1-index];
        }
    }
</script>

<!--
    <pre>
    const
    h: {heights}
    o: {offs}
    m: {max} h-o
    var
    s: {scrolls.map(s => s.toFixed(2))}
    d: {scrolls.map((s,i) => (heights[i] - s).toFixed(2))} h-s [h, o]
    l: {scrolls.map((s,i) => (heights[i] - s- offs[i]).toFixed(2))} m-s [m, 0]
    c0: {(scrolls[1]*((max[0])/(max[1]))).toFixed(2)}, {((scrolls[0] - scrolls[1]*((max[0])/(max[1]))))}
    c1: {(scrolls[0]*((max[1])/(max[0]))).toFixed(2)}, {((scrolls[1] - scrolls[0]*((max[1])/(max[0]))))}
    </pre>
-->

<div class="h-full">
    <HSplitPane>
        <div slot="left" 
            class="px-4 mx-auto max-h-full overflow-y-auto" 
            bind:this={slots[0]}
            bind:offsetHeight="{offs[0]}"
            on:scroll={() => handleScroll(0)}>
                <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter}  bind:height={heights[0]}/>
        </div>
        <div slot="right" 
            class="px-4 mx-auto max-h-full overflow-y-auto"
            bind:this={slots[1]}
            bind:offsetHeight="{offs[1]}"
            on:scroll={() => handleScroll(1)}>
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} bind:height={heights[1]}/>
        </div>
    </HSplitPane>
</div>