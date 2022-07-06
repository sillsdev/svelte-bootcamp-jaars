<script lang="ts">
    import HorizontalPanes from "../components/HorizontalPanes.svelte";
    import VerticalPanes from "../components/VerticalPanes.svelte";

    import PkScriptureView from "./PKScriptureView.svelte";

    import { docSet, book, chapter } from "../data/stores";

    $: panes = [
        {component: PkScriptureView, props:{docSet: $docSet, book: $book, chapter: $chapter}},
        {component: PkScriptureView, props:{docSet: $docSet, book: $book, chapter: $chapter}},
        {component: PkScriptureView, props:{docSet: $docSet, book: $book, chapter: $chapter}},
        {component: PkScriptureView, props:{docSet: $docSet, book: $book, chapter: $chapter}}
    ];
</script>

<div class="h-full hidden sm:block">
    <HorizontalPanes {panes}/>
</div>
<div class="h-full sm:hidden">
    <VerticalPanes>
        <div class="bg-base-300" slot="top">
            <svelte:component this={panes[0].component} {...panes[0].props} />
        </div>
        <div class="bg-base-300" slot="down">
            <svelte:component this={panes[1].component} {...panes[1].props} />
        </div>
    </VerticalPanes>
</div>
