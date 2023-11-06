<script lang="ts">
    export let data;

    import Tagline from "./_Tagline.svelte";
    import SectionGrid from "./_SectionGrid.svelte";
</script>

<svelte:head>
    <title>ttc: the discord server: the forums</title>
</svelte:head>

<Tagline>gaming.mp3</Tagline>

<SectionGrid sections={data.sections} is_mod={data.active_user?.is_mod} />
