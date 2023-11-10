<script lang="ts">
    import ThreadItem from "./ThreadItem.svelte";
    import Header from "./_Header.svelte";

    export let data;

    const { section, threads, active_user } = data;
</script>

<Header {...data} />

<ol>
    {#each threads as thread}
        <ThreadItem {thread} />
    {/each}
</ol>

<style>
    ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>