<script lang="ts">
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";
    import { HSplitPane } from "svelte-split-pane";

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

<div class="h-full">
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
