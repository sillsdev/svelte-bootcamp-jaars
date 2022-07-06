<script>
    import { page } from '$app/stores';
    import PkScriptureView from '$lib/views/PKScriptureView.svelte';
    import { docSet, book, chapter } from '$lib/data/stores';

    $: (() => {
        const r = $page.params.reference.split("/");
        if(r.length > 0) {
            $docSet = r[0];
        }
        if(r.length > 1) {
            $book = r[1];
        }
        if(r.length > 2) {
            $chapter = r[2];
        }
        if(r.length > 3) {
            
        }
    })();
</script>

<PkScriptureView docSet={$docSet} book={$book} chapter={$chapter} />