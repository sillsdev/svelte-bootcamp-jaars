<script lang="ts">
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";
    import { HSplitPane } from "svelte-split-pane";

    let num = 50;
</script>

<div class="wrapper">
    <HSplitPane>
        <left slot="left" class="px-2 mx-auto overflow-y-hidden flex flex-col">
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />
        </left>
        <right slot="right" class="px-2 mx-auto overflow-y-hidden flex flex-col">
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />
        </right>
    </HSplitPane>
</div>



<style>
    div.wrapper {
        height: 100%;
    }
    left, right, top, down {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
