<script>
    import "../tailwind.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
    let reference = {book: "John", chapter:"1", verse:"1"}
</script>

<div class="dy-drawer dy-drawer-mobile">
    <input id="my-drawer" type="checkbox" class="dy-drawer-toggle" />
    <div class="dy-drawer-content"><!--flex flex-col items-center justify-center">-->
        <!-- Page content here -->
        <div class="flex flex-col h-screen">
            <Navbar {...reference}>
                <label for="my-drawer" slot="drawer-button" class="dy-btn dy-btn-ghost p-1 dy-drawer-button lg:hidden">
                    <HamburgerIcon/>
                </label>
            </Navbar>
            <main class="p-2 flex-grow bg-gray-200">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/history">History</a>
                    <a href="/highlights">Highlights</a>
                    <a href="/notes">Notes</a>
                    <a href="/bookmarks">Bookmarks</a>
                </nav>
                <div class="container mx-auto "><slot></slot></div>
            </main>
        </div>
    </div> 
    <div class="dy-drawer-side">
        <label for="my-drawer" class="dy-drawer-overlay"></label> 
        <ul class="dy-menu p-4 overflow-y-auto w-3/4 sm:w-80 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
        </ul>
    </div>
  </div>