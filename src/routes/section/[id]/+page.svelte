<script lang="ts">
    import Header from "./_Header.svelte";

    export let data;

    const { section, threads, active_user } = data;
</script>

<Header {...data} />
