<script context="module">
    const elements = new Set();

    export function closeAll() {
        elements.forEach(element => {
            element.showMenu = false;
        });
    }
</script>

<script>
    export let actions = [""];
    let showMenu = false;
</script>

<div class="annotation-item-menu annotation-float-right">
    <span on:click={() => showMenu = !showMenu} class="dropbtn">
        <img class="dropbtn-image" src="ic_dots_vertical_24_black.png" alt="vertical dots">
    </span>
    <div class="dropdown-content {showMenu? "show":"hidden"}">
        {#each actions as a}
        <!-- svelte-ignore a11y-missing-attribute-->
            <a>{a}</a>
        {/each}
        <!--Orignal menu. Handle actual actions later-->
        <!--<a href="I-0">View</a>
        <a href="E-0">Edit</a>
        <a href="S-0">Share</a>
        <a href="D-0">Delete</a>-->
    </div>
</div>