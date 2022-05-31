<script>
    export let drawerId = "drawer";
</script>

<div class="dy-drawer dy-drawer-mobile">
    <input id="{drawerId}" type="checkbox" class="dy-drawer-toggle" />
    <div class="dy-drawer-content">
        <!-- Page content here -->
        <slot></slot>
    </div> 
    <div class="dy-drawer-side">
        <label for="{drawerId}" class="dy-drawer-overlay"></label> 
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