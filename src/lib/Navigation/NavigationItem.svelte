<script lang="ts">
    import { page } from "$app/stores";

    export let href: string,
        important: boolean = false;
</script>

<a
    class:selected={href == "/"
        ? $page.url.pathname == href
        : $page.url.pathname.startsWith(href)}
    class:important
    {href}
>
    <slot />
</a>

<style>
    a {
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: 500;
        white-space: nowrap;
        color: inherit;

        display: flex;
        align-items: center;

        padding: 0.4rem 1rem;
        width: max-content;

        user-select: none;

        &:hover {
            background-color: var(--colour-primary-900);
        }
    }

    .important {
        margin-right: 1.5rem;
        font-weight: 700;
    }

    .selected {
        background-color: white;
        color: var(--colour-primary-950);

        &:hover {
            background-color: white;
        }
    }
</style>
