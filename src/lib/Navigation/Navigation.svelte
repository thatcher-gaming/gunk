<script>
    import Item from "./NavigationItem.svelte";
</script>

<nav>
    <div>
        <Item important href="/">ttc the forums<em>!!</em></Item>
        <Item href="/sections">sectionz</Item>
        <Item href="/rooms">chat</Item>
        <Item href="/threads">threadz</Item>
        <Item href="/events">happeningz</Item>
        <div class="spacer" />
        <Item href="/login">login</Item>
        <Item href="/register">register</Item>
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

        max-width: 66rem;
        width: 100%;
        margin: 0 auto;
    }
</style>
