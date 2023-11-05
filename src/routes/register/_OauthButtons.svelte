<script>
    import Button from "$lib/Buttons/Button.svelte";
</script>

<ul>
    <li>
        <Button
            style="
                background: var(--colour-plum-200);
                outline-color: var(--colour-plum-300);
            "
            kind="a"
            href="/login/discord/"
        >
            login with discord
        </Button>
    </li>
    <li>
        <Button
            style="
                background: var(--colour-grey-200);
                outline-color: var(--colour-grey-300);
            "
            kind="a"
            href="/login/github/"
        >
            login with github
        </Button>
    </li>
    <li>
        <Button
            style="
                background: var(--colour-red-200);
                outline-color: var(--colour-red-300);
            "
            kind="a"
            href="/login/google/"
        >
            login with google
        </Button>
    </li>
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        padding-right: 2rem;
        display: flex;
        gap: 0.75rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
    }
</style>
