<script>
    import BookChooser from "../components/BookChooser.svelte";
    export let params;
    
</script>
<h1>Check for Problems</h1>
<BookChooser selectedBook={params.book}/>