<script>
    import BookChooser from "../components/BookChooser.svelte";
    export let params;
    
</script>
<h1>Read &amp; Record</h1>
<BookChooser selectedBook={params.book}/>