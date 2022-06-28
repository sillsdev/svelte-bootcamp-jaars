<script lang="ts">
    import SplitPane from "./SplitPane.svelte";
    import PkScriptureView from "./PKScriptureView.svelte";
    import { docSet, book, chapter} from "../data/stores";

    let num = 50;
</script>


<SplitPane>
	<svelte:fragment slot="left">
		<div class="z-0"><PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} /></div>
	</svelte:fragment>
	<svelte:fragment slot="right">
		<div class="z-0"><PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} /></div>
	</svelte:fragment>
</SplitPane>
<!--<div class="flex flex-col sm:flex-row">
    <div class="z-0"><PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} /></div>
    <div class="dy-divider sm:dy-divider-horizontal z-10 max-h-screen">
        <span class="dy-btn bg-gray-400 w-1">||</span>
    </div>
    <div class="z-10" style="width: {num}%">
        <PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />
    </div>
</div>-->
