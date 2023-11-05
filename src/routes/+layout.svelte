<script lang="ts">
    import "@fontsource-variable/commissioner/full.css";
    import "../app.css";
    import Navigation from "$lib/Navigation/Navigation.svelte";

    export let data;
</script>

<Navigation {...data.active_user} />
<main>
    <slot />
</main>

<style>
    main {
        max-width: 64rem;
        margin: 2rem auto;

        padding: 0 0.75rem;
    }
</style>
