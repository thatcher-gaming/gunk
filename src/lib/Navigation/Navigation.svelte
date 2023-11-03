<script lang="ts">
    import Item from "./NavigationItem.svelte";

    export let handle: string | undefined;
</script>

<nav>
    <div>
        <Item important href="/">ttc the forums<em>!!</em></Item>
        <Item href="/sections">sectionz</Item>
        <Item href="/rooms">chat</Item>
        <Item href="/threads">threadz</Item>
        <Item href="/events">happeningz</Item>
        <div class="spacer" />
        {#if handle}
            <Item href="/its/{handle}">@{handle}</Item>
        {:else}
            <Item href="/login">login</Item>
            <Item href="/register">register</Item>
        {/if}
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: end;

        background-color: var(--colour-primary-950);
        color: var(--colour-primary-100);
    }

    div {
        display: flex;
        align-items: center;

        max-width: 64rem;
        width: 100%;
        margin: 0 auto;
    }
</style>
