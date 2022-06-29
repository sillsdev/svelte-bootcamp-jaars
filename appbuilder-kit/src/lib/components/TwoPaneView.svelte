<script lang="ts">
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";
    import { HSplitPane } from "svelte-split-pane";

    let num = 50;
</script>

<div class="h-full">
    <HSplitPane>
        <div slot="left" class="px-2 mx-auto max-h-full overflow-y-auto">
                <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />
        </div>
        <div slot="right" class="px-2 mx-auto max-h-full overflow-y-auto">
            <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />
        </div>
    </HSplitPane>
</div>
