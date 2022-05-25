<script>
    import NoteCard from '$lib/components/NoteCard.svelte';
    let bookmarks = [
        {
            reference:"John 1:5",
            text:"The light shines in the darkness and the darkness hasn't overcome it.",
            date:"22 May 2022",
            actions:["View","Share","Delete"],
        },   
        {
            reference:"John 1:1",
            text:"In the beginning was the Word, and the Word was with God, and the Word was God.",
            date:"21 May 2022",
            actions:["View","Share","Delete"],
        },];
</script>

<h1>Bookmarks</h1>

<body class="annotations">
    {#each bookmarks as b}
        <NoteCard {...b}>
            <div slot="icon" class="annotation-item-icon annotation-float-left">
                <span><img src="ic_bookmark_24_red.png" alt="text bubble"></span>
            </div>
        </NoteCard>
    {/each}
</body>