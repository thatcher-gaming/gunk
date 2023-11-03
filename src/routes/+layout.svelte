<script lang="ts">
    import "@fontsource-variable/piazzolla/opsz.css";
    import "@fontsource-variable/piazzolla/opsz-italic.css";
    import "../app.css";
    import Navigation from "$lib/Navigation/Navigation.svelte";

    export let data;
</script>

<Navigation handle={data.active_user?.handle} />
<main>
    <slot />
</main>

<style>
    main {
        max-width: 64rem;
        margin: 2rem auto;

        padding: 0 .75rem;
    }
</style>