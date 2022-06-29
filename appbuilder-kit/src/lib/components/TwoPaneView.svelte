<script lang="ts">
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";
    import { HSplitPane, VSplitPane } from "svelte-split-pane";

    let heights: number[] = [];
    let scrolls: number[] = [0, 0];
    let slots: any[] = [];
    let offs: number[] = [];

    function handleScroll(index: number) {
        scrolls[index] = slots[index].scrollTop;
        scrolls[1-index] = scrolls[index]*((heights[1-index]-offs[1-index])/(heights[index]-offs[index]));
        slots[index].scrollTop = scrolls[index];
        slots[1-index].scrollTop = scrolls[1-index];
    }
</script>

<pre>const</pre>
<pre>h: {heights}</pre>
<pre>o: {offs}</pre>
<pre>m: {heights.map((h,i) => h-offs[i])} h-o</pre>
<pre>var</pre>
<pre>s: {scrolls.map(s => s.toFixed(2))}</pre>
<pre>d: {scrolls.map((s,i) => (heights[i] - s).toFixed(2))} h-s [h, o]</pre>
<pre>l: {scrolls.map((s,i) => (heights[i] - s- offs[i]).toFixed(2))} m-s [m, 0]</pre>

<div class="h-full hidden sm:block">
    <HSplitPane>
        <div slot="left" 
            class="px-2 mx-auto max-h-full overflow-y-auto" 
            bind:this={slots[0]}
            bind:offsetHeight="{offs[0]}"
            on:scroll={() => handleScroll(0)}>
                <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter}  bind:height={heights[0]}/>
        </div>
        <div slot="right" 
            class="px-2 mx-auto max-h-full overflow-y-auto"
            bind:this={slots[1]}
            bind:offsetHeight="{offs[1]}"
            on:scroll={() => handleScroll(1)}>
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} bind:height={heights[1]}/>
        </div>
    </HSplitPane>
</div>
<div class="h-full sm:hidden">
    <VSplitPane>
        <div slot="top" 
            class="p-4 mx-auto max-h-full overflow-y-auto" 
            bind:this={slots[0]}
            bind:offsetHeight="{offs[0]}"
            on:scroll={() => handleScroll(0)}>
                <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter}  bind:height={heights[0]}/>
        </div>
        <div slot="down" 
            class="p-4 mx-auto max-h-full overflow-y-auto"
            bind:this={slots[1]}
            bind:offsetHeight="{offs[1]}"
            on:scroll={() => handleScroll(1)}>
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} bind:height={heights[1]}/>
        </div>
    </VSplitPane>
</div>
