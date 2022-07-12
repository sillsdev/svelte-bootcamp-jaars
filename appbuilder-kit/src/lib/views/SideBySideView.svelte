<script lang="ts">
    import HorizontalPanes from "../components/HorizontalPanes.svelte";
    import VerticalPanes from "../components/VerticalPanes.svelte";

    import PkScriptureView from "./PKScriptureView.svelte";
    import SearchView from "./SearchView.svelte";

    import { refs } from "../data/stores";

    $: panes = [
        {component: PkScriptureView, props:{
            docSet: $refs.default.docSet, 
            book: $refs.default.book, 
            chapter: $refs.default.chapter
        }},
        {component: PkScriptureView, props:{
            docSet: $refs.default.docSet, 
            book: $refs.default.book, 
            chapter: $refs.default.chapter
        }},
        {component: PkScriptureView, props:{
            docSet: $refs.default.docSet, 
            book: $refs.default.book, 
            chapter: $refs.default.chapter
        }},
        {component: SearchView, props:{}}
    ];
</script>

<div class="h-full hidden sm:block">
    <HorizontalPanes {panes}/>
</div>
<div class="h-full sm:hidden">
    <VerticalPanes>
        <div slot="top">
            <svelte:component this={panes[0].component} {...panes[0].props} />
        </div>
        <div slot="down">
            <svelte:component this={panes[1].component} {...panes[1].props} />
        </div>
    </VerticalPanes>
</div>
