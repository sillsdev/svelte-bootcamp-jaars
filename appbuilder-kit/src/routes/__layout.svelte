<script>
    import "../tailwind.css";
    import Navbar from "$lib/components/Navbar.svelte";
    let reference = {book: "John", chapter:"1", verse:"1"}
</script>

<Navbar {...reference}/>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/history">History</a>
    <a href="/highlights">Highlights</a>
    <a href="/notes">Notes</a>
    <a href="/bookmarks">Bookmarks</a>
</nav>
 
<slot></slot>