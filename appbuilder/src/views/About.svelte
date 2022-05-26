<script lang="ts">

async function getAboutText() {
    const res = await fetch('./about.html');
    const text = await res.text();

    if (res.ok) {
        return text;
    } else {
        throw new Error(text);
    }
}
let promise = getAboutText();

</script>

<h1>About</h1>
<body class="about">

 {#await promise}
    <p>Loading data</p>
{:then aboutText}
   <p> {@html aboutText} </p>
{:catch error}
    <p style="color: red">{error.message}</p>
 {/await}

 </body>
<style>


</style>