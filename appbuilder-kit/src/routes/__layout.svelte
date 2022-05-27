<script>
    import "../tailwind.css";
    import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
    import MuteIcon from "$lib/icons/MuteIcon.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import DropdownIcon from "$lib/icons/DropdownIcon.svelte";
    let book = "John";
    let chapter = "1";
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="btn btn-ghost p-1">
            <HamburgerIcon/>
        </div>
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost p-0.5 no-animation">
                {book} <DropdownIcon/>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                
            </ul>
        </div>
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost p-0.5 no-animation">
                {chapter} <DropdownIcon/>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            
            </ul>
        </div>
    </div>
    <div class="navbar-end fill-base-content">
        <button class="btn btn-ghost btn-circle">
            <MuteIcon/>
        </button>
        <button class="btn btn-ghost btn-circle">
            <SearchIcon/>
        </button>
        <button class="btn btn-ghost btn-circle">
            <img class="w-5 h-5" src="icons/ic_action_font_bigger_black.png" alt="hamburger menu"/>
        </button>
    </div>
</div>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/history">History</a>
    <a href="/highlights">Highlights</a>
    <a href="/notes">Notes</a>
    <a href="/bookmarks">Bookmarks</a>
</nav>
 
<slot></slot>

<style>
    /*
    img{
        width: 28px;
        height: 28px;
    }*/
</style>
