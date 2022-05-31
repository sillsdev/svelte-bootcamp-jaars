<script>
    import "../tailwind.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
    let reference = {book: "John", chapter:"1", verse:"1"}
</script>

<div class="dy-drawer dy-drawer-mobile">
    <input id="my-drawer" type="checkbox" class="dy-drawer-toggle" />
    <div class="dy-drawer-content">
        <!-- Page content here -->
        <div class="flex flex-col h-screen">
            <Navbar {...reference}>
                <label for="my-drawer" slot="drawer-button" class="dy-btn dy-btn-ghost p-1 dy-drawer-button lg:hidden">
                    <HamburgerIcon/>
                </label>
            </Navbar>
            <main class="p-2 flex-grow bg-gray-200">
                <div class="container mx-auto "><slot></slot></div>
            </main>
        </div>
    </div> 
    <div class="dy-drawer-side">
        <label for="my-drawer" class="dy-drawer-overlay"></label> 
        <ul class="dy-menu p-1 overflow-y-auto w-3/4 sm:w-80 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Search</a></li>
            <div class="dy-divider m-1"></div>
            <li><a href="/history">History</a></li>
            <li><a href="/bookmarks">Bookmarks</a></li>
            <li><a href="/notes">Notes</a></li>
            <li><a href="/highlights">Highlights</a></li>
            <div class="dy-divider m-1"></div>
            <li><a>Share App</a></li>
            <div class="dy-divider m-1"></div>
            <li><a>Settings</a></li>
            <li><a>Text Appearance</a></li>
            <div class="dy-divider m-1"></div>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
  </div>