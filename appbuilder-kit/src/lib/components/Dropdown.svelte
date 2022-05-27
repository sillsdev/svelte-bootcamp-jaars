<div class="dropdown">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label tabindex="0" class="btn btn-ghost p-0.5 no-animation">
        <slot name="label"/>
    </label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <slot name="content"/>
    </ul>
</div>