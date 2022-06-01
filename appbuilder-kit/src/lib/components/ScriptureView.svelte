<script>
    export let text = {
        title:"",
        book:"",
        chapter:"",
        paragraphs:[
            {
                1:{
                    a:"",
                },
            },
        ],
    };
</script>
<article class="prose">
    <h1 class="text-center">{text.title}</h1>
    {#each text.paragraphs as paragraph}
        <p>
            {#each Object.keys(paragraph) as verse}
                <span id="{verse}"><h4>{verse}</h4>
                    {#each Object.keys(paragraph[verse]) as versePart}
                        <span id="{verse+versePart}">
                            {paragraph[verse][versePart]+" "}
                        </span>
                    {/each}
                </span>
            {/each}
        </p>
    {/each}
</article>

<style>
    h4{
        display: inline
    }
</style>