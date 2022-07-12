<script>
    import { page } from '$app/stores';
    import PkScriptureView from '$lib/views/PKScriptureView.svelte';
    import { refs } from '$lib/data/stores';

    $: (() => {
        const r = $page.params.reference.split("/");
        const newRef = {}
        if(r.length > 0) {
            newRef.docSet = r[0];
        }
        if(r.length > 1) {
            newRef.book = r[1];
        }
        if(r.length > 2) {
            newRef.chapter = r[2];
        }
        if(r.length > 3) {
            
        }
        $refs = {key: "default", val: newRef}
    })();
</script>

<PkScriptureView docSet={$refs.default.docSet} book={$refs.default.book} chapter={$refs.default.chapter} />