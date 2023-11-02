<script lang="ts">
    import "@fontsource-variable/piazzolla/opsz.css";
    import "@fontsource-variable/piazzolla/opsz-italic.css";
    import "../app.css";
    import Navigation from "$lib/Navigation.svelte";
</script>

<Navigation />
<main>
    <slot />
</main>

<style>
    main {
        max-width: 64rem;
        margin: 2rem auto;
    }
</style>