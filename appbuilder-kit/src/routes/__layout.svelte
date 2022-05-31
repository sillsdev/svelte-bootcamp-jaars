<script>
    import "../tailwind.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Sidebar from "$lib/components/Sidebar.svelte";
    import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
    let reference = {book: "John", chapter:"1", verse:"1"}
    let drawerName = "sidebar"
</script>

<Sidebar drawerId={drawerName}>
    <div class="flex flex-col h-screen items-center justify-center bg-gray-200">
        <Navbar {...reference}>
            <label for="{drawerName}" slot="drawer-button" class="dy-btn dy-btn-ghost p-1 dy-drawer-button lg:hidden">
                <HamburgerIcon/>
            </label>
        </Navbar>
        <main class="p-2 flex-grow bg-gray-200">
            <div class="container mx-auto "><slot></slot></div>
        </main>
    </div>
</Sidebar>
